import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

// Styled components with enhanced styling
const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 20px;
`;

const CommentContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const CommentsList = styled.div`
  margin-bottom: 20px;
`;

const Comment = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #e0e6ef;
  border-radius: 8px;
  background-color: #ffffff;
`;

const ReplyContainer = styled.div`
  margin-top: 10px;
  padding-left: 20px;
`;

const Reply = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  border: 1px solid #e0e6ef;
  border-radius: 6px;
  background-color: #f4f7fc;
  font-size: 0.9rem;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 6px;
  }

  & .MuiInputBase-root {
    background-color: #ffffff;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  text-transform: none;
  font-weight: bold;
  border-radius: 6px;
  background-color: #337ab7; /* added */
  color: #ffffff; /* added */
  padding: 8px 16px; /* added */
  border: none; /* added */
  cursor: pointer; /* added */

  &:hover {
    background-color: #23527c; /* added */
  }
`;
const CommentSection = ({ id }) => {
  const user = useSelector((state) => state.user.currentUser);
  const userName = user.username;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    // Fetch comments from the server on component mount
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comments/${id}`);
        setComments(res.data.comments || []);
      } catch (err) {
        console.error("Failed to fetch comments: ", err);
      }
    };
    fetchComments();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim()) {
      try {
        const newCommentData = { userName, text: `${userName} : ${newComment.trim()}`, replies: [] };
        const updatedComments = [...comments, newCommentData];
        await axios.post(`http://localhost:5000/api/comments/${id}`, { comments: updatedComments });
        setComments(updatedComments);
        setNewComment("");
      } catch (error) {
        console.error("Failed to submit comment: ", error.response ? error.response.data : error.message);
      }
    }
  };

  const handleReplyChange = (commentIndex, event) => {
    const updatedReplies = { ...replies, [commentIndex]: event.target.value };
    setReplies(updatedReplies);
  };

  const handleReplySubmit = async (commentIndex) => {
    if (replies[commentIndex]?.trim()) {
      try {
        const updatedComments = comments.map((comment, index) => {
          if (index === commentIndex) {
            return {
              ...comment,
              replies: [...comment.replies, { userName, replytext: `${userName} : ${replies[commentIndex].trim()}` }],
            };
          }
          return comment;
        });
        await axios.post(`http://localhost:5000/api/comments/${id}`, { comments: updatedComments });
        setComments(updatedComments);
        setReplies({ ...replies, [commentIndex]: "" });
      } catch (error) {
        console.error("Failed to submit reply: ", error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <CommentContainer>
      <Title>Reviews and discussions</Title>
      <CommentsList>
        {comments.map((comment, index) => (
          <Comment key={index}>
            {comment.text || comment}
            <ReplyContainer>
              {comment.replies?.map((reply, rIndex) => (
                <Reply key={rIndex}>
                  {reply.replytext}
                </Reply>
              ))}
              <StyledTextField
                label="Add a reply"
                multiline
                rows={2}
                value={replies[index] || ""}
                onChange={(e) => handleReplyChange(index, e)}
                fullWidth
              />
              <StyledButton
                variant="contained"
                color="primary"
                onClick={() => handleReplySubmit(index)}
              >
                Reply
              </StyledButton>
            </ReplyContainer>
          </Comment>
        ))}
      </CommentsList>
      <StyledTextField
        label="Add a comment"
        multiline
        rows={4}
        value={newComment}
        onChange={handleCommentChange}
        fullWidth
      />
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleCommentSubmit}
      >
        Submit
      </StyledButton>
    </CommentContainer>
  );
};

export default CommentSection;

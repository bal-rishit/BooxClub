import CommentSection from "../models/CommentSection.js";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "./verifyToken.js";
import express from "express"


const router = express.Router();

//Submit

router.post('/:id', async (req, res) => {
    const { id } = req.params;
    //console.log(id);
    const { comments } = req.body;
  
    try {
      if (!comments || !Array.isArray(comments)) {
        return res.status(400).json({ message: 'Invalid comments data' });
      }
      //Check if an entry with the given id exists
      const existingCommentSection = await CommentSection.findOne({ referenceId: id });
  
      if (existingCommentSection) {
        // Update existing entry
        existingCommentSection.comments = comments;
        await existingCommentSection.save();
        return res.status(200).json({ message: 'Comments updated successfully', comments: existingCommentSection.comments });
      } else {
        //Create a new entry
        const newCommentSection = new CommentSection({ referenceId: id, comments: comments});
        await newCommentSection.save();
        return res.status(201).json({ message: 'Comments added successfully', comments: newCommentSection.comments });
      }
    } catch (error) {
      console.error("Error saving comments: ", error);
      return res.status(500).json({ message: 'Internal Server Error, OO skibdi re' });
    }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {  
    const commentsection = await CommentSection.findOne({referenceId: id});
    res.status(200).json(commentsection);
  } catch (err) {
    res.status(500).json(err);
  }
});



// //GET QUESTION
// router.get("/find/:id", async (req, res) => {
//   try {
//     const question = await Paper.findById(req.params.id);
//     res.status(200).json(question);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

export default router;
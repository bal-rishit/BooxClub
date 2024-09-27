import { Schema, model } from "mongoose";

const ReplySchema = new Schema({
  userName: {
    type: String,
    default: "",
  },
  replytext: {
    type: String,
    default: "",
  }
}, { _id: false }
);


const CommentSchema = new Schema({
  userName: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  replies: {
    type: [ReplySchema],
  },
},{ _id: false }
);

const CommentSectionSchema = new Schema(
  {
    referenceId: { 
      type: String,
      default: "",
    },
    comments:{
      type: [CommentSchema],
    },
    
  }, 
);

export default model("CommentSection", CommentSectionSchema);
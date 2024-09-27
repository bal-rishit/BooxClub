import { Schema, model } from "mongoose";

const PaperSchema = new Schema({
  stream: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  selectedOptions: {
    option1: {
      type: Boolean,
      default: false,
    },
    option2: {
      type: Boolean,
      default: false,
    },
    option3: {
      type: Boolean,
      default: false,
    },
    option4: {
      type: Boolean,
      default: false,
    },
  },
  givenOptions: {
    option1: {
      type: String,
      default: '',
    },
    option2: {
      type: String,
      default: '',
    },
    option3: {
      type: String,
      default: '',
    },
    option4: {
      type: String,
      default: '',
    },
  },
},
{ timestamps: true }
);

export default model("Paper", PaperSchema);



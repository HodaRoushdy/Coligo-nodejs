import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, "you must enter a course name"],
    trim: true,
    maxLength: [10, "course name must not be more than 10 characters"],
  },
  topic: {
    type: String,
    required: [true, "you must enter a quiz topic"],
    trim: true,
    maxLength: [20, "course name must not be more than 20 characters"],
  },
  due_to: {
    type: String,
    required: [true, "you must enter a quiz date"],
    trim: true,
    maxLength: [20, "course name must not be more than 20 characters"],
  },
});
export const QuizModel = mongoose.model("QuizModel", quizSchema);


import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
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
    maxLength: [30, "topic of quiz must not be more than 20 characters"],
  },
  dueTo: {
    type: String,
    required: [true, "you must enter a quiz Date"],
    trim: true,
  },
});
export const QuizModel = mongoose.model("QuizModel", quizSchema);

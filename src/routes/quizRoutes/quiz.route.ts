import express from "express";
import {
  addQuiz,
  deleteQuiz,
  getAllQuiz,
  getSpecificQuiz,
  updateQuiz,
} from "../../controllers/quizController/quiz.controller"

export const quizRouter = express.Router();

quizRouter.route("/").get(getAllQuiz).post(addQuiz);
quizRouter
  .route("/:id")
  .patch(updateQuiz)
  .delete(deleteQuiz)
  .get(getSpecificQuiz);

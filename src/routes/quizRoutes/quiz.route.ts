import express from "express";
// import { addQuizService, deleteQuizService, getAllQuizService, getSpecificQuizService, updateQuizService } from "../../services/quizService/quiz.service";
import {getAllQuizService} from "../../services/quizService/quiz.service";
export const router = express.Router()

// router.route("/api/quizzes").get(getAllQuizService).post(addQuizService)
// router.route("/api/quizzes:id").patch(updateQuizService).delete(deleteQuizService).get(getSpecificQuizService)


router.route("/api/quizzes").get(getAllQuizService);

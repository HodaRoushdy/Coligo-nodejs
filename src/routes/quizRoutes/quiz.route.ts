import express from "express";
// import { addQuizService, deleteQuizService, getAllQuizService, getSpecificQuizService, updateQuizService } from "../../services/quizService/quiz.service";
import {getAllQuizService, getSpecificQuizService} from "../../services/quizService/quiz.service";
export const router = express.Router()

// router.route("/").get(getAllQuizService).post(addQuizService)
// router.route("/:id").patch(updateQuizService).delete(deleteQuizService).get(getSpecificQuizService)


router.route("/").get(getAllQuizService)
router.route("/:id").get(getSpecificQuizService)

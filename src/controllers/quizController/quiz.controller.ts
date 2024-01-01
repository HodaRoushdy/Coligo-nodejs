import { Request, Response } from "express";

import { asyncWrapper } from "../../middlewares/async-wrapper";
import { notFound } from "../../middlewares/not-found";
import {
  addQuizServ,
  deleteQuizServ,
  getAllQuizzesServ,
  getSpecificQuizServ,
  updateQuizServ,
} from "../../services/quizService/quiz.service";

export const getSpecificQuiz = asyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const specificQuiz = await getSpecificQuizServ(id);
    if (specificQuiz) {
      res.status(200).json({ status: "success", data: { specificQuiz } });
    } else {
      notFound(req, res);
    }
  }
);

export const getAllQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const allQuizzes = await getAllQuizzesServ();
  if (allQuizzes) {
    res.status(201).json({ status: "success", data: { allQuizzes } });
  } else {
    notFound(req, res);
  }
});

export const updateQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const quizData = req.body;
  const updatedQuiz = await updateQuizServ(id, quizData);
  if (updatedQuiz) {
    res
      .status(200)
      .json({ status: "success", message: "updated successfully" });
  } else {
    notFound(req, res);
  }
});
export const deleteQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedQuiz = await deleteQuizServ(id);
  if (deletedQuiz) {
    res
      .status(200)
      .json({ status: "success", message: "deleted successfully" });
  } else {
    notFound(req, res);
  }
});
export const addQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const quizData = req.body;
  const newQuiz = await addQuizServ(quizData);
  if (newQuiz) {
    res
      .status(201)
      .json({ status: "success", message: "created successfully" });
  } else {
    notFound(req, res);
  }
});

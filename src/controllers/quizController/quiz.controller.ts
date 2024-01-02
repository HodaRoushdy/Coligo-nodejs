import { Request, Response } from "express";

import mongoose from "mongoose";
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
      res.json({ message: "Quiz not found" });
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
  const itemUpdated = await updateQuizServ(id, quizData);
  if (itemUpdated) {
    res.json({
      message: " updated successfully",
      data: {
        itemUpdated,
      },
    });
  } else {
    res.json({ message: "Quiz not found" });
    notFound(req, res);
  }
});

export const deleteQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedQuiz = await deleteQuizServ(id);
  if (deletedQuiz) {
    res.json({
      message: "deleted successfully",
      data: {
        deletedQuiz,
      },
    });
  } else {
    res.json({ message: "Quiz not found" });
    notFound(req, res);
  }
});

export const addQuiz = asyncWrapper(async (req: Request, res: Response) => {
  const quizData = req.body;

  try {
    const newQuiz = await addQuizServ(quizData);
    if (newQuiz) {
      res.status(201).json({
        status: "success",
        message: "created successfully",
        data: newQuiz,
      });
    } else {
      notFound(req, res);
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    } else {
      console.error("Error creating quiz:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
});

import { NextFunction, Request, Response } from "express";
import { QuizModel } from "../../model/quiz/quizModel";

// const asyncWrapper = require("../../middlewares/async-wrapper");
// import {asyn}

// export const getAllQuizService = asyncWrapper(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const allQuizzes = await QuizModel.find({});
//     res.status(201).json({
//       status: "success",
//       data: { allQuizzes },
//     });
//   }
// );

export const getSpecificQuizService = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params;
    const specificQuiz = await QuizModel.findOne({ _id: id });
    if (specificQuiz) {
      res.status(201).json({ status: "success", data: { specificQuiz } });
    } else {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};



export const getAllQuizService = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allQuizzes = await QuizModel.find({});
    if (allQuizzes) {
      res.status(201).json({ status: "success", data: { allQuizzes } });
    } else {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

// export const updateQuizService = asyncWrapper(
//   async (err: Error, req: Request, res: Response, next: NextFunction) => {
//     const id = req.params;
//     const updatedQuiz = await QuizModel.findOneAndUpdate({ _id: id });
//     if (updatedQuiz) {
//       res.status(201).json({
//         status: "success",
//         data: { updatedQuiz },
//         message: "updated successfully",
//       });
//     } else {
//       next(err);
//     }
//   }
// );

// export const deleteQuizService = asyncWrapper(
//   async (err: Error, req: Request, res: Response, next: NextFunction) => {
//     const id = req.params;
//     const deletedQuiz = await QuizModel.findOneAndDelete({ _id: id });
//     if (deletedQuiz) {
//       res
//         .status(201)
//         .json({ status: "success", message: "deleted successfully" });
//     } else {
//       next(err);
//     }
//   }
// );

// export const addQuizService = asyncWrapper(
//   async (req: Request, res: Response, next: NextFunction, err: Error) => {
//     const quiz = req.body;
//     const addedQuiz = await QuizModel.create({ quiz });
//     res
//       .status(201)
//       .json({ data: { addedQuiz }, message: "created successfully" });
//   }
// );

import { Request, Response } from "express";
import { QuizModel } from "../../model/quiz/quizModel";


import {asyncWrapper} from '../../middlewares/async-wrapper'


// export const getSpecificQuizService = async (
//   req: Request,
//   res: Response,
// ) => {
//   try {
//     const id = req.params;
//     const specificQuiz = await QuizModel.findOne({ _id: id });
//     if (specificQuiz) {
//       res.status(201).json({ status: "success", data: { specificQuiz } });
//     } else {
//       next(err);
//     }
//   } catch (err) {
//     next(err);
//   }
// };



// export const getAllQuizService = async (
//   req: Request,
//   res: Response,
// ) => {
//   try {
//     const allQuizzes = await QuizModel.find({});
//     if (allQuizzes) {
//       res.status(201).json({ status: "success", data: { allQuizzes } });
//     } else {
//       res.status(400).json({status:"bad request"})
//     }
//   } catch (err) {
//     res.status(500).json({ status: "internal server error" });

//   }
// };

export const getAllQuizService = asyncWrapper(
  async (req: Request, res: Response) => {
    const allQuizzes = await QuizModel.find({})
    if (allQuizzes) {
      res.status(201).json({status:"success",data:{allQuizzes}})
    } else {
      res.status(400).json({status:"bad request"})
    }
 }
)

// export const updateQuizService = asyncWrapper(
//   async (req: Request, res: Response) => {
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
//   async (req: Request, res: Response) => {
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
//   async (req: Request, res: Response) => {
//     const quiz = req.body;
//     const addedQuiz = await QuizModel.create({ quiz });
//     res
//       .status(201)
//       .json({ data: { addedQuiz }, message: "created successfully" });
//   }
// );

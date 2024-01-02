import { QuizModel } from "../../model/quiz/quizModel"

export const getAllQuizzesServ = async () => {
  return await QuizModel.find({})
}

export const getSpecificQuizServ = async (id:string) => {
  return await QuizModel.findOne({_id:id});
};
export const updateQuizServ = async (id: string,data:object) => {
  return await QuizModel.findByIdAndUpdate(id,data,{ new: true })
};
export const deleteQuizServ = async (id: string) => {
  return await QuizModel.findByIdAndDelete(id)
};
export const addQuizServ = async (data:object) => {
  return await QuizModel.create(data)
};

import { AnnouceModel } from "../../model/annoucement"


export const getAllAnnouceDataServ = async () => {
  return await AnnouceModel.find({});
}
export const getAnnoucServ = async (id:string) => {
  return await AnnouceModel.findOne({_id:id});
}
export const addAnnoucServ = async (data:object) => {
  return await AnnouceModel.create({data})
}
export const updateAnnoucServ = async (id:string,data:object) => {
  return await AnnouceModel.findOneAndUpdate({_id:id,data})
}
export const deleteAnnouceServ = async (id: string) => {
  return await AnnouceModel.findOneAndDelete({_id:id})
};
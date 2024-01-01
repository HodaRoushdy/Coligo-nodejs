import { AnnounceModel } from "../../model/announcement/announceModel";

export const getAllAnnounceDataServ = async () => {
  return await AnnounceModel.find({});
};
export const getAnnounceServ = async (id: string) => {
  return await AnnounceModel.findOne({ _id: id });
};
export const addAnnounceServ = async (data: object) => {
  return await AnnounceModel.create({ data });
};
export const updateAnnounceServ = async (id: string, data: object) => {
  return await AnnounceModel.findOneAndUpdate({ _id: id, data });
};
export const deleteAnnounceServ = async (id: string) => {
  return await AnnounceModel.findOneAndDelete({ _id: id });
};

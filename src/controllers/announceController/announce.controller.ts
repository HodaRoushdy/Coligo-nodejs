import { Request, Response } from "express";
import { notFound } from "../../middlewares/not-found";
import {
  addAnnounceServ,
  deleteAnnounceServ,
  getAllAnnounceDataServ,
  getAnnounceServ,
  updateAnnounceServ,
} from "../../services/announceService/annouce.service";

export const getAllAnnounceData = async (req: Request, res: Response) => {
  const allAnnoucements = await getAllAnnounceDataServ();
  if (allAnnoucements) {
    res.status(200).json({ status: "success", data: { allAnnoucements } });
  } else {
    notFound(req, res);
  }
};
export const getSpecificAnnounce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const announcement = await getAnnounceServ(id);
  if (announcement) {
    res
      .status(200)
      .json({ status: "success", data: { annoucement: announcement } });
  } else {
    notFound(req, res);
  }
};
export const updateAnnounce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const annouceData = req.body;
  const updatedAnnouce = await updateAnnounceServ(id, annouceData);
  if (updatedAnnouce) {
    res
      .status(200)
      .json({ status: "success", message: "updated Successfully " });
  } else {
    notFound(req, res);
  }
};
export const deleteAnnounce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedAnnouce = await deleteAnnounceServ(id);
  if (deletedAnnouce) {
    res
      .status(200)
      .json({ status: "success", message: "deleted successfully" });
  } else {
    notFound(req, res);
  }
};
export const createAnnounce = async (req: Request, res: Response) => {
  const AnnoucementData = req.body;
  const newAnnouce = await addAnnounceServ(AnnoucementData);
  if (newAnnouce) {
    res.status(200).json({ status: "success", data: { newAnnouce } });
  } else {
    notFound(req, res);
  }
};

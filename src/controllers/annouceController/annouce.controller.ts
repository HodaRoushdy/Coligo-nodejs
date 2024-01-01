import { Request, Response } from "express";
import { notFound } from "../../middlewares/not-found";
import {
  addAnnoucServ,
  deleteAnnouceServ,
  getAllAnnouceDataServ,
  getAnnoucServ,
  updateAnnoucServ,
} from "../../services/annouceService/annouce.service";

export const getAllAnnouceData = async (req: Request, res: Response) => {
  const allAnnoucements = await getAllAnnouceDataServ();
  if (allAnnoucements) {
    res.status(200).json({ status: "success", data: { allAnnoucements } });
  } else {
    notFound(req,res)
  }
};
export const getSpecificAnnouce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const annoucement = await getAnnoucServ(id);
  if (annoucement) {
    res.status(200).json({ status: "success", data: { annoucement } });
  } else {
    notFound(req, res);
  }
};
export const updateAnnouce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const annouceData = req.body;
  const updatedAnnouce = await updateAnnoucServ(id, annouceData);
  if (updatedAnnouce) {
    res
      .status(200)
      .json({ status: "success", message: "updated Successfully " });
  } else {
    notFound(req, res);
  }
};
export const deleteAnnouce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedAnnouce = await deleteAnnouceServ(id);
  if (deletedAnnouce) {
    res
      .status(200)
      .json({ status: "success", message: "deleted successfully" });
  } else {
    notFound(req, res);
  }
};
export const createAnnouce = async (req: Request, res: Response) => {
  const AnnoucementData = req.body;
  const newAnnouce = await addAnnoucServ(AnnoucementData);
  if (newAnnouce) {
    res.status(200).json({ status: "success", data: { newAnnouce } });
  } else {
    notFound(req, res);
  }
};

import { Request, Response } from "express";
import mongoose from "mongoose";
import { badRequest } from "../../middlewares/bad-request";
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
    badRequest(req, res);
    res.json({ message: "no Announcements" });
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
    res.json({ message: "Announcement not found" });
    badRequest(req, res);
  }
};

export const updateAnnounce = async (req: Request, res: Response) => {
  const { id } = req.params;
  const annouceData = req.body;
  const updatedAnnounce = await updateAnnounceServ(id, annouceData);
  if (updatedAnnounce) {
    res.status(200).json({
      status: "success",
      message: "updated Successfully ",
      updatedAnnounce,
    });
  } else {
    res.json({ message: "Announcement not found" });
    badRequest(req, res);
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
    res.json({ message: "Announcement not found" });
    badRequest(req, res);
  }
};

export const createAnnounce = async (req: Request, res: Response) => {
  const AnnoucementData = req.body;
  try {
    const newAnnounce = await addAnnounceServ(AnnoucementData);
    if (newAnnounce) {
      res.status(201).json({
        status: "success",
        message: "created successfully",
        data: newAnnounce,
      });
    } else {
      badRequest(req, res);
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ status: "error", message: error.message });
    } else {
      console.error("Error creating announcement:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
};

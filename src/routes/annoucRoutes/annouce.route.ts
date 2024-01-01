import express from "express";
import {
  createAnnouce,
  deleteAnnouce,
  getAllAnnouceData,
  getSpecificAnnouce,
  updateAnnouce,
} from "../../controllers/annouceController/annouce.controller";

export const annouceRouter = express.Router();
annouceRouter.route("/").get(getAllAnnouceData).post(createAnnouce);
annouceRouter
  .route("/:id")
  .patch(updateAnnouce)
  .delete(deleteAnnouce)
  .get(getSpecificAnnouce);

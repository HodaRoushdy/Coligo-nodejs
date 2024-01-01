import express from "express";
import {
  createAnnounce,
  deleteAnnounce,
  getAllAnnounceData,
  getSpecificAnnounce,
  updateAnnounce,
} from "../../controllers/announceController/announce.controller";

export const announceRouter = express.Router();
announceRouter.route("/").get(getAllAnnounceData).post(createAnnounce);
announceRouter
  .route("/:id")
  .patch(updateAnnounce)
  .delete(deleteAnnounce)
  .get(getSpecificAnnounce);

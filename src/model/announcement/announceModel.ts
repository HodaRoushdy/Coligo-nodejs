import mongoose from "mongoose";

const announceSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  imgAlt: {
    type: String,
    required: true,
    trim: true,
  },
  annoucement: {
    type: String,
    required: [true, "please enter your annoucement body"],
    trim: true,
  },
});

export const AnnounceModel = mongoose.model("AnnounceModel", announceSchema);

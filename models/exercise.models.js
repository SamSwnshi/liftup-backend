import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    name: String,
    bodyPart: String,
    equipment: String,
    target: String,
    gifUrl: String,
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise",exerciseSchema)

export default Exercise;
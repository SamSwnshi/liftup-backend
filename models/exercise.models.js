import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    id: {type: String,unique: true},
    name: String,
    bodyPart: String,
    equipment: String,
    target: String,
    gifUrl: String,
    instructions: [String]
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise",exerciseSchema)

export default Exercise;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: [6, "Email must be at least 6 Character long"],
      maxLength: [50, "Email must be at least 50 Character long"],
    },
    password: {
      type: String,
      required: [true, "Password is Requried!"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);


const User = mongoose.model("User",userSchema)

export default User;
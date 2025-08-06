import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      default: "user", // other possible: "admin", "author"
      index: true,
    },
    avatar: {
      type: String, // cloudinary
    },
  },
  {
    timestamps: true,
  
  }
);

export const User = mongoose.model("User", userSchema);

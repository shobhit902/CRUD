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
      enum: ["reader", "author", "admin"], // added roles
      default: "author",
      index: true,
    },

    // bio

    bio: {
      type: String,
      default: "",
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

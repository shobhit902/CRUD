import mongoose, { Schema } from "mongoose";
const novelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    novel_author: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      index: true,
    },
   
    status: {
      type: Boolean,
    },
    year: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

export const Novel = mongoose.model("Novel", novelSchema);

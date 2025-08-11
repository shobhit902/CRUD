import mongoose, { Schema } from "mongoose";

const novelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    coverImage: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String], 
      default: [],
    },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

export const Novel = mongoose.model("Novel", novelSchema);

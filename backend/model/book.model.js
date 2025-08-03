/*
_id  string
name string
price money
avatar string
author_name string
published_date date
*/

import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String, //cloudinary url
    },
    author_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    published_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;

import mongoose, { connect } from "mongoose";
import dotenv, { configDotenv } from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const state = await mongoose.connection.readyState;
    if (state === 1) {
      console.log(`Database connected`);
    } else {
      console.log("MongoDB is NOT connected. State:", state);
    }
  } catch (error) {
    console.log(`Database not connected`, error.message);
  }
};

export { connectDb };

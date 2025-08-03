import express from "express";
import bookRoute from "./routes/bookroute.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRoute);

export { app };

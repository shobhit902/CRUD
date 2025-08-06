import express from "express";
import bookRoute from "./routes/bookRoute.js";
import novelRoute from "./routes/novelRoute.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRoute);

app.use("/api/novel", novelRoute)

export { app };

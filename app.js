import express from "express";
import bookRoute from "./routes/bookroute.js"

const app = express();

app.use(express.json())

app.use('/api/book', bookRoute)


export { app };

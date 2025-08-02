import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDb } from "./db/index.js";

dotenv.config();
connectDb();


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("hello")
})

app.listen(port, (req, res) => {
  console.log(`Listening at the port ${port}.`);
});

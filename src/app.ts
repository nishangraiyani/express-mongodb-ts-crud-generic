import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/database";
import { router } from "./routes";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

connectDB();

app.use(router);

app.get("/", (_req, res) => res.status(200).send("Greetings!!"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

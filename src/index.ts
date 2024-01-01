import "dotenv/config";
import express from "express";
const app = express();

const port = process.env.PORT;
app.use(express.json());

import { connectedDB } from "./database/connection";
import { router } from "./routes/quizRoutes/quiz.route";
app.use("/", router);

const connect = async () => {
  try {
    await connectedDB;
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();

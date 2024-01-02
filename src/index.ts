import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT;

app.use(express.json());

import { connectedDB } from "./database/connection";
import { announceRouter } from "./routes/announcRoutes/annouce.route";
import { quizRouter } from "./routes/quizRoutes/quiz.route";
app.use("/api/quizzes", quizRouter);
app.use("/api/announcements", announceRouter);

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

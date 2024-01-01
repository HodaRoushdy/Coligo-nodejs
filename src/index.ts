import "dotenv/config";
import express from "express";
const app = express();

const port = process.env.PORT;
app.use(express.json());

import { connectedDB } from "./database/connection";
import { quizRouter } from "./routes/quizRoutes/quiz.route";
import { annouceRouter } from "./routes/annoucRoutes/annouce.route";
app.use("/api/quizzes", quizRouter);
app.use("/api/annoucements", annouceRouter);


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

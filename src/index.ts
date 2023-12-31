const express = require('express');
const app = express()
import "dotenv/config";

const port = process.env.PORT
app.use(express.json());

const quizzes = require("../src/routes/quizRoutes/quiz.route")
app.use("/api/quizzes", quizzes);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

// User Route start here
const userRouter = require("./Routers/user.router");

app.use("/app/v1/user", userRouter);

// Course_Lesson
const CourseLesson = require("./Routers/CourseLesson.route");

app.use("/app/v1/course", CourseLesson);
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;

const express = require("express");
const app = express();
var cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

// User Route start here
const userRouter = require("./Routers/user.router");

app.use("/app/v1/user", userRouter);

module.exports = app;

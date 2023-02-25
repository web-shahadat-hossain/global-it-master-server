const express = require("express");
const jwtVerify = require("../middleware/verifyJWT");
const courseController = require("../Controllers/CourseLesson.controller");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
});

router
  .route("/")
  .get(courseController.getALLCourse)
  .post(
    upload.fields([
      {
        name: "videos",
        maxCount: 5,
      },
    ]),
    courseController.create
  );
router.route("/id").get(courseController.findOneCourse);

module.exports = router;

const CourseLesson = require("../Model/CourseLesson.model");
var jwt = require("jsonwebtoken");
module.exports.getALLCourse = async (req, res) => {
  try {
    const result = await CourseLesson.find({});
    res.send({
      status: 200,
      message: "Successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};
module.exports.create = async (req, res) => {
  const { name } = req.body;
  let videosPaths = "";
  if (req?.files?.videos[0]?.path) {
    videosPaths = req?.files?.videos[0]?.path;
  }

  try {
    const createdMedia = await CourseLesson.create({
      name,
      videos: videosPaths,
    });

    res.send({
      status: 200,
      message: "Successfully",
      data: createdMedia,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};
module.exports.findOneCourse = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};

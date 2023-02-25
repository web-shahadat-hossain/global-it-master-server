const { default: mongoose } = require("mongoose");

const courseLessonSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
  },
  videos: { type: String },
});

// model

const course_lesson = mongoose.model("course", courseLessonSchema);

module.exports = course_lesson;

const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
  },
  photo: {
    type: String,
  },
  number: {
    type: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
});

// model

const User = mongoose.model("User", userSchema);

module.exports = User;

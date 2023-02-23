const User = require("../Model/User.model");
var jwt = require("jsonwebtoken");

module.exports.putUser = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await User.findOneAndUpdate(
      { email: email },
      {
        $set: req.body,
      },
      { new: true, upsert: true }
    );

    // JSON Web Token
    var token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET);

    res.send({
      status: 200,
      accessToken: token,
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const email = req?.params?.email;

    if (email === req?.decoded?.email) {
      const result = await User.findOne({ email: email });
      return res.send({
        status: 200,
        data: result,
      });
    } else {
      return res.status(403).send({ message: "Forbidden Access", status: 403 });
    }
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};
module.exports.getALLUser = async (req, res) => {
  try {
    const result = await User.find({});
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
module.exports.adminRolePut = async (req, res) => {
  try {
    const email = req.params.email;

    const result = await User.findOneAndUpdate(
      { email: email },
      {
        $set: { role: "admin" },
      },
      { new: true }
    );

    res.send({
      status: 200,
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      error: err.message,
    });
  }
};

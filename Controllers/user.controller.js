const User = require("../Model/User.model");

module.exports.putUser = async (req, res) => {
  try {
    // const user = new User(req.body);

    const result = await User.findOneAndUpdate(
      { email: req.params.email },
      {
        $set: req.body,
      },
      { new: true, upsert: true }
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
module.exports.getUser = async (req, res) => {
  try {
    // const user = new User(req.body);

    const result = await User.findOne({ email: req.params.email });

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

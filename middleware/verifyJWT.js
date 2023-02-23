var jwt = require("jsonwebtoken");

function jwtVerify(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .send({ message: "Unauthorized Access", status: 401 });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden Access", status: 403 });
    }
    req.decoded = decoded;
    next();
  });
}
module.exports = jwtVerify;

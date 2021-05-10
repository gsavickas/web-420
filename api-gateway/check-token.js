// ============================================
// ; Title:  Token Checker
// ; Author: Grayton Savickas
// ; Date: 9 May 2021
// ; Description: token checking utility
// ;===========================================
// */

var jwt = require("jsonwebtoken");
var config = require("./config");

// check header for valid token
function checkToken(req, res, next) {
  // get the request headers ‘x-access-token’ field
  var token = req.headers["x-access-token"];

  // check to see if token is null
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  // if the token is valid, validate token
  jwt.verify(token, config.web.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

// export the checkToken function
module.exports = checkToken;
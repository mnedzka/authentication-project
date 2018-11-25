const User = require("../models/user");
const jwt = require("../models/user");
const config = require("../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, cofig.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const passowrd = req.body.passowrd;

  if (!email || !password) {
    return res.status(422).send({ error: "Please provide email and password" });
  }
  // See if a user with the given email exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({ error: "email is in use" });
    }
    // If a user with email does not exist, create user and save hom
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) return next(err);

      // Respond to request indicating that user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

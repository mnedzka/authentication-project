const passport = require("passport");
const User = require("../models/user");
const config = require("..config");
const JwtStartegy = require("passport-jwt").Startegy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Set up option for JWT startegy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secret
};

// Create JWT strategy
const jwtLogin = new JwtStartegy(jwtOptions, function(payload, done) {
  User.findById(paylaod.sub, function(err, user) {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

//Use this strategy
passport.use(jwtLogin);


var passport = require('passport');
var User = require('./models/users').User;

var Strategy = require('passport-http').BasicStrategy;
passport.use(new Strategy(
  (username, password, next) => {
    return User
      .findOne({ email: username, password: password })
      .then((user) => {
        if (user) {
          return next(null, user);
        }
        else {
          return next(null, false);
        }
      })
      .catch((err) => {
        return next(err, false);
      });
  }));

  module.exports = passport;
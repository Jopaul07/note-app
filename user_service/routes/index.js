var express = require('express');
var User = require('../models/users').User;
var UserProfile = require('../models/users').UserProfile;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'User_service' });
});

router.post('/login', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  User
    .findOne({ email, password })
    .then((user) => {
      if (user) {
        return res.status(200).json({ response: "login successfull!" });
      }
      else {
        return res.status(401).json({ response: "login failed!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ err });
    })

});

router.post('/signup', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let address = req.body.address;
  User.create({email, password})
    .then((user) => {
      return UserProfile.create({ firstName, lastName, address, owner: user._id });
    })
    .then((userProfile) => {
      return res.status(200).json({ response: "user successfully created!" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err });
    });


});

module.exports = router;

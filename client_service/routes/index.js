
var express = require('express');
var request = require('request');
var router = express.Router();

let user_service_url = "http://localhost:3001/";
let note_service_url = "http://localhost:3002/";
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Client_service' });
});

router.get('/login', (req, res, next) => {

});


router.get('/signup', (req, res, next) => {

});

router.post('/login', (req, res, next) => {
  let authHeader = req.header("Authorization");
  request.post({
    headers: {
      Authorization: authHeader
    }, 
    url: user_service_url + 'login',
  }, (error, response, body) => {
    if (error) {
      return res.status(500).json({ error }); // Print the error if one occurred
    }
    if (response.statusCode !== 200) {
      return res.status(response.statusCode).json({ error: "Error found" });
    }

    return res.status(200).json({ response: 'Login successful' });
  });
});

router.post('/signup', (req, res, next) => {
  request.post({ url: user_service_url + 'signup', form: { email: req.body.email, password: req.body.password, firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address } }, (error, response, body) => {
    if (error) {
      return res.status(500).json({ error }); // Print the error if one occurred
    }
    if (response.statusCode !== 200) {
      return res.status(response.statusCode).json({ error: "Error found" });
    }

    return res.status(200).json({ response: 'signup successful' });
  });
});
router.get('/notes/all', (req, res, next) => {

});
router.post('/notes', (req, res, next) => {

});
router.put('/notes', (req, res, next) => {

});
router.delete('/notes', (req, res, next) => {

});
module.exports = router;

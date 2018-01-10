
var express = require('express');
var request = require('request');
var router = express.Router();

let user_service_url = "http://user_service:3001/";
let note_service_url = "http://note_service:3002/";
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Client_service' });
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
  let authHeader = req.header("Authorization");
  request.post({
    url: user_service_url + 'login',
    headers: {
      Authorization: authHeader
    }
  }, (error, response, body) => {
    if (error) {
      return res.status(500).json({ error }); // Print the error if one occurred
    }
    if (response.statusCode !== 200) {
      return res.status(response.statusCode).json({ error: "Error found" });
    }
    let user = JSON.parse(body);
    request.get({ url: note_service_url + 'notes/all', form: { userId: user._id } },
      (error, response, body) => {
        if (error) {
          return res.status(500).json({ error }); // Print the error if one occurred
        }
        if (response.statusCode !== 200) {
          return res.status(response.statusCode).json({ error: "Error found" });
        }

        return res.status(200).json(JSON.parse(body));
      });
  });
});
router.post('/notes', (req, res, next) => {
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
    let user = JSON.parse(body);
    request.post({ url: note_service_url + 'notes', form: { userId: user._id, userProfileId: user.profile, noteText: req.body.noteText } },
      (error, response, body) => {
        if (error) {
          return res.status(500).json({ error }); // Print the error if one occurred
        }
        if (response.statusCode !== 200) {
          return res.status(response.statusCode).json({ error: "Error found" });
        }

        return res.status(200).json({ response: 'Note created successfully!' });
      });
  });


});
router.put('/notes', (req, res, next) => {
  let authHeader = req.header("Authorization");
  let noteid = req.body.noteId;
  let notetext = req.body.noteText;
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
    let user = JSON.parse(body);
    request.put({ url: note_service_url + 'notes', form: { userId: user._id, noteId: noteid, noteText: notetext } },
      (error, response, body) => {
        if (error) {
          return res.status(500).json({ error }); // Print the error if one occurred
        }
        if (response.statusCode !== 200) {
          return res.status(response.statusCode).json({ error: "Error found" });
        }

        return res.status(200).json({ response: 'Note modified successfully!' });
      });
  });
});
router.delete('/notes', (req, res, next) => {
  let authHeader = req.header("Authorization");
  let noteid = req.body.noteId;
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
    let user = JSON.parse(body);
    request.delete({ url: note_service_url + 'notes', form: { noteId: noteid, userId: user._id } }, (error, response, body) => {
      if (error) {
        return res.status(500).json({ error }); // Print the error if one occurred
      }
      if (response.statusCode !== 200) {
        return res.status(response.statusCode).json({ error: "Error found" });
      }

      return res.status(200).json({ response: 'Note deleted successfully!' });
    });
  });
});
module.exports = router;

var express = require('express');
var router = express.Router();
var Note = require('../models/notes').Note;

/* GET home page. */
router.get('/notes/all', (req, res, next) => {
  //res.json({user:req.user});
  let userId = req.body.userId;
  Note
    .find({ userId })
    .then((notes) => {
      return res.status(200).json({ notes });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err });
    });
});

router.put('/notes', function (req, res, next) {
  let userId = req.body.userId;
  let noteId = req.body.noteId;
  let noteText = req.body.noteText;
  Note
    .update({ _id:noteId, userId}, {noteText:noteText})
    .then((note) => {
      return res.status(200).json({ note });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err });
    });
});
router.delete('/notes', function (req, res, next) {
  let noteId = req.body.noteId;
  let userId = req.body.userId;
  Note
  .remove({_id:noteId,userId})
  .then((note)=>{
    return res.status(200).json({ message:"note deleted" });
  })
  .catch((err)=>{
    console.log(err);
    return res.status(500).json({ err });
  })
});
router.post('/notes',
  (req, res, next) => {
    //res.json({user:req.user});
    let userId = req.body.userId;
    let userProfileId = req.body.userProfileId;
    let noteText = req.body.noteText;
    Note.create({
      userId,userProfileId,noteText
    })
    .then((note)=>{
      return res.status(200).json({note });
    })
    .catch((err)=>{
      console.log(err);
      return res.status(500).json({ err });
    })
  });

module.exports = router;

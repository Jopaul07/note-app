var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// let tPromise = require('bluebird');
// mongoose.Promise =tPromise;
// create a schema

var noteSchema = new Schema({
    userid: { type: String, requied: true},
    userProfileId: { type: Number, requied: true},
    noteText: { type: String, required: true}
});

var Note = mongoose.model('Note',noteSchema);

module.exports = {Note};
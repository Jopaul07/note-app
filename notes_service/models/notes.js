var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a schema

var noteSchema = new Schema({
    userId: { type: String, requied: true},
    userProfileId: { type: String, requied: true},
    noteText: { type: String, required: true}
});

var Note = mongoose.model('Note',noteSchema);

module.exports = {Note};
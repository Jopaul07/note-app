
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
    email: { type: String, requied: true, unique: true },
    password: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, ref: 'UserProfile' }
});
var userProfileSchema = new Schema({
    firstName: { type: String, requied: true },
    lastName: { type: String, required: true },
    address: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

var User = mongoose.model('User', userSchema);
var UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = { User, UserProfile };
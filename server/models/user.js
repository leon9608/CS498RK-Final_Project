// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    isStudent: {type:Boolean, required:true},
    name: {type:String,required:true},
    email: {type:String,required:true, unique:true},
    postsIds:[String],
    password:{type:String, required:true}
},{versionKey: false});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

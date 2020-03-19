const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    accType: {type: String,},
    accStatus: {type: String,}, 
    accVerification:{type: String,},
    ProfileImage: {type: String,},
    email: {type: String, required:true,  unique: true},
    FirstName: {type: String,},
    LastName: {type: String,},
    UserName: {type: String,  required:true},
    Password: {type: String, required:true},
    Gender: {type: String, required:true},
    Age: {type: String, required:true},
    Location: {type: String,},
    PhoneNumber: {type: Number,},
    CIN: {type: Number,},
});

module.exports = mongoose.model("User", UserSchema);
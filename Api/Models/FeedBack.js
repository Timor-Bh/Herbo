const mongoose = require('mongoose');
const feedbackSchema = mongoose.Schema({
    ProductId:  String ,
    UserId: String ,
    Rate: Number,
    Comment: String,
    UserImage: String,
    UserName: String,

});
module.exports = mongoose.model('FeedBack',feedbackSchema);
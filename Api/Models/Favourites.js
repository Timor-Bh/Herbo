const mongoose = require('mongoose');
const favouriteSchema = mongoose.Schema({
    ProductId:  String ,
    UserId: String ,
});
module.exports = mongoose.model('Favourite',favouriteSchema);
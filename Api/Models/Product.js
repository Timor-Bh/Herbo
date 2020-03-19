const mongoose = require('mongoose');
const productSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    category: String,
    price: Number,
    availableQuantity: Number,
    photo: String,
    sells:Number,
    Bans: Number,
    Sellerid:String,
});
module.exports = mongoose.model('Product', productSchema);
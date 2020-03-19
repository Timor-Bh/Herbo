const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserId: {type: String,},
    productId: {type: String,},
    Quantity: {type: Number,},
    Uprice: {type: Number,},
    Tprice: {type: Number,},
    Type: {type: String,},
    SellerId: {type: String,},

});

module.exports = mongoose.model("Cart", CartSchema);
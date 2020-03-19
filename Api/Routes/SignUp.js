const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js")

const User = require("../Models/User");
const Order= require("../Models/Cart");
const Product = require("../Models/Product");
const Favourite = require("../Models/Favourites");
const FeedBack = require("../Models/FeedBack");


router.post('/', (req, res, next) => {
    let decrypt = CryptoJS.AES.decrypt(req.body.Password, 'this.secretKey'.trim()).toString(CryptoJS.enc.Utf8); 
    console.log(decrypt)
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        accType: req.body.accType,
        accStatus: "active",
        accVerification: "Unverified",
        ProfileImage: req.body.ProfileImage,
        email: req.body.email,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: decrypt,
        Gender: req.body.Gender,
        Age: req.body.Age,
        PhoneNumber: req.body.PhoneNumber,
        Location: req.body.Location,
        CIN: req.body.CIN,
       // Favourits: req.body.Favourits,
    });
    newUser.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: "Your account has been successfully created",
            createdProduct: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: "Eror!!!"
            });
        })
})
module.exports = router;
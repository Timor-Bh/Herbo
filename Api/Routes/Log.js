const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../Models/User");
const Order= require("../Models/Cart");
const Product = require("../Models/Product");
const Favourite = require("../Models/Favourites");
const FeedBack = require("../Models/FeedBack");

router.post('/In',  (req, res) =>{
    User.findOne({email:req.body.email,Password:req.body.Password})
    .then(result=>{
  if (result) {
    res.json({
        Message :"Login Success",
        result : result
    })
      }
  else {
      res.json({
        Message :"Login Failed"})
      }
    })
})
router.post('/Out',  (req, res) =>{
    const currentId = req.body.currentId;
    const Password= req.body.Password;
    User.findOne({currentId:currentId,Password:Password})
    .then(result=>{
  if (result) {
    res.json({
        Message :"Logout Sucess ",
    })
      }
  else {
      res.json({
        Message :"Logout Failed"})
      }
    })
})


module.exports = router;
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../Models/User");
const Order= require("../Models/Cart");
const Product = require("../Models/Product");
const Favourite = require("../Models/Favourites");
const FeedBack = require("../Models/FeedBack");

/*----------------|Verify-User|-----------------*/
router.patch('/user/verify',  (req, res, next) =>{
    const currentId = req.body.currentId ;
    const userId = req.body.userId ;
        User.find({_id:currentId}).select('accType').then( docs =>{
            const Acctype = docs[0].accType
            if(Acctype=='admin'){
                User.updateOne({_id:userId, accType:'seller'},{$set:{accVerification :"Verified"}})   
                .exec()
                .then(docs =>{
                    res.status(200).json({
                    message: " The account have been verified",
                    docs,
                })
            })
                .catch(err =>{
                    res.status(500).json({
                    error: err,
                })
});
            }
            else{
                res.status(200).json({
                    message: "You must be Admin To Verify accounts",})
            }
        })     
})
/**delete user */
router.delete('/user/delete',(req,res,next) => {
    const currentId = req.body.currentId ;
    const userId = req.body.userId ;
    User.find({_id:currentId}).select('accType').then( docs =>{
        const Acctype = docs[0].accType
        if(Acctype=='admin'){
            User
            .remove({_id:userId})
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'user Deleted'
                })
            })

            .catch(err =>{
                res.status(500).json({
                error: err,
            })
});
        }
        else{
            res.status(200).json({
                message: "You must be Admin To Delete accounts",})
        }
    }) 
    
});
/*See All Users */
router.get('/users',(req,res,next) => {
    const currentId = req.body.currentId ;
    User.find({_id:currentId}).select('accType').then( docs =>{
        const Acctype = docs[0].accType
        if(Acctype=='admin'){
            User.find()
            .exec()
            .then(docs => {
                console.log(docs);
                res.status(200).json({
                    message: 'those are all the users',
                    users: docs
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })  
        }
        else{
            res.status(200).json({
                message: "You must be Admin To See All accounts",})
        }
    })  
})
/*edit user*/
router.patch("/user/edit", (req, res, next) => {
    const currentId = req.body.currentId ;
    const userId = req.body.userId ;
    User.find({_id:currentId}).select('accType').then( docs =>{
        const Acctype = docs[0].accType
        if(Acctype=='admin'){
            User.update(
                { _id: userId },
                { $set: { FirstName: req.body.newFirstName,LastName: req.body.newLastName,UserName: req.body.newUserName,Password: req.body.newPassword, email: req.body.newemail ,Age: req.body.newAge ,Location: req.body.newLocation,PhoneNumber: req.body.newPhoneNumber } },
              )
                .exec()
                .then(docs => {
                  console.log(docs);
                  res.status(200).json({
                    message: "Your account has been succefully edited"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
           
             
        }
        else{
            res.status(200).json({
                message: "You must be Admin To edit an accounts",})
        }
    })  
    
  });
/* */
router.patch('/user/upgrade', (req, res, next)=>{
    const currentId = req.body.currentId ;
    const userId = req.body.userId ;
    User.find({_id:currentId}).select('accType').then( docs =>{
        const Acctype = docs[0].accType
        if(Acctype=='admin'){
            User.findById(userId)
           .update({ $set: { accType : "admin"}})
           .exec()
           .then( docs => {
               console.log(docs);
                   res.status(200).json({
                       message: 'User Upgraded',
                   });
           })
           .catch(err => {
               console.log(err);
               res.status(500).json({
                   error: err
               });
           });;       
        }
        else{
            res.status(200).json({
                message: "You must be Admin To Add Admins",})
        }
    })    
})

module.exports = router;
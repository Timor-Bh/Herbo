const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../Models/User");
const Order= require("../Models/Cart");
const Product = require("../Models/Product");
const Favourite = require("../Models/Favourites");
const FeedBack = require("../Models/FeedBack");

/*post product */
router.post("/product/add", (req, res, next) => {
    const currentId=req.body.Sellerid
        User.find({_id:currentId}).then( docs =>{
            const Acctype = docs[0].accType;
            if(Acctype == 'seller'){
                const newProduct = new Product({
                    _id: new mongoose.Types.ObjectId(),
                    name : req.body.name,
                    description: req.body.description,
                    category : req.body.category,
                    price : req.body.price,
                    availableQuantity : req.body.availableQuantity,
                    photo : req.body.photo,
                    sells : 0,
                    Bans : 0 ,
                    Sellerid :req.body.Sellerid,
                });
                newProduct.save()
                    .then(docs => {
                        console.log(docs);
                        res.status(200).json({
                            message: "Your producut has been successfully saved",
                            docs : docs,
                            //Sellerid
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
                    message: "You must be Seller To Add Products",})
            }
        })  
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });   
});
// Delete product 

router.delete('/product/delete',(req,res,next) => {
    const currentId = req.body.currentId ;
    const productId = req.body.productId;
        User.find({_id:currentId}).select('accType').then( docs =>{
            const Acctype = docs[0].accType;
            if(Acctype =='seller'){
                Product
                .remove({_id:productId,Sellerid:currentId})
                .exec()
                .then(result => {
                    console.log(result);
                        res.status(200).json({
                            message: 'Product Deleted'
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
                    message: "You must be Admin To Verify accounts",})
            }
        })         
});
    

// Patching the product: 

router.patch('/product/edit', (req,res,next) => {
    const currentId = req.body.currentId ;
    const productId = req.body.productId;
        User.find({_id:currentId}).select('accType').then( docs =>{
            const Acctype = docs[0].accType;
            if(Acctype =='seller'){
                Product
                .update({_id:productId,}, {$set: {name: req.body.newname,category:req.body.newcategory,price:req.body.newprice,availableQuantity: req.body.newavailableQuantity, photo: req.body.newphoto,description: req.body.newdescription,}})
                .exec()
                .then(result => {
                   console.log(result);
                     res.status(200).json({
                        message: "you edited your product "
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
                    message: "You must be Seller To Edit Products",})
            }
        })
        .catch(err => {
            console.log(err);
                res.status(500).json({
                    error: err
            })
        })     
})
//See Orders
router.get('/seeorders', (req,res,next) =>{
    const currentId = req.body.currentId ;
        User.find({_id:currentId}).select('accType').then( docs =>{
            const Acctype = docs[0].accType;
            if(Acctype =='seller'){
                Order.find({SellerId:currentId,Type:'Ordered'})
                .save()
                .then(docs =>{
                    res.status(200).json({
                        message: "Sucess",
                        docs
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
                    message: "You must be Seller To Edit Products",})
            }
        }) 
        .catch(err => {
            console.log(err);
                res.status(500).json({
                    error: err
            })
        })    
})
//Finish Order
router.patch('/finishorder', (req,res,next) =>{
    const currentId = req.body.currentId ;
    const orderId = req.body.orderId;
        User.find({_id:currentId}).select('accType').then( docs =>{
            const Acctype = docs[0].accType;
            if(Acctype =='seller'){
                Order.update({SellerId:currentId,Type:'Ordered',_id:orderId},{$set:{Type:'History'}})
                .save()
                .then(docs =>{
                    res.status(200).json({
                        message: "Sucess",
                        docs
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
                    message: "You must be Seller To Edit Products",})
            }
        }) 
        .catch(err => {
            console.log(err);
                res.status(500).json({
                    error: err
            })
        })    
})

module.exports = router;
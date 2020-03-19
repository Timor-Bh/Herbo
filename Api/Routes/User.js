const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../Models/User");
const Order= require("../Models/Cart");
const Product = require("../Models/Product");
const Favourite = require("../Models/Favourites");
const FeedBack = require("../Models/FeedBack");

//see Profile
router.post('/profile',(req,res,next) => {
    const currentId = req.body.currentId;
    User.findById(currentId)
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message:'Thats your profile',
            user: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});
//Delete Profile
router.patch("/profile/delete", (req, res, next) => {
    const currentId = req.body.currentId;
    User.update({_id:currentId}, {$set : {accstatus:'disabled'}} )
    .exec()
    .then(docs => {
        res.status(200).json({
            message: "Your Account have been Deleted!"
           });
        })
    .catch(err => {
        console.log(err);
            res.status(500).json({
            error: err
            });
    });      
})
// Edit Profile
router.patch("/profile/edit", (req, res, next) => {
    const currentId = req.body.currentId;
    User.update(
      { _id: currentId },
      { $set: { FirstName: req.body.newFirstName,LastName: req.body.newLastName,UserName: req.body.newUserName,Password: req.body.newPassword, email: req.body.newemail ,Age: req.body.newAge ,Location: req.body.newLocation,PhoneNumber: req.body.newPhoneNumber } },
    )
      .exec()
      .then(docs => {
        console.log(docs);
        res.status(200).json({
          message: "Your account has been Edited succefully"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
//see Products
router.get('/products',(req,res,next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({
            message: 'those are all the products',
            product:docs
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
//see Best sellers
router.get('/products/bestsellers',(req,res,next)=>{
    Product.find()
    .sort({sells:1})
    .limit(5)
    .exec()
    .then(result =>{
        res.status(200).json({
            "best sellers" : result.reverse()
        })
        })
})
//see Products By Category
router.get('/products/:Category',(req,res,next) => {
    const Category = req.params.Category;
    Product.find({category:Category})
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({
            message: 'those are all the products',
            products: docs
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
//see Product
router.get('/product/:productId',(req,res,next) => {
    const productId = req.params.productId;
    Product.findById(productId)
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message:'Thats your product in details',
            product: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});
//see Comments
router.get('/comments',(req,res,next) => {
    const productId = req.body.productId;
    FeedBack
    .find ({_id:productId})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
//buy product
router.patch('/product', (req, res, next) => {
    const currentId = req.body.currentId ;
    const productId = req.body.productId;
    const quantity=req.body.quantity;
    console.log(productId);
    
    Product
    .findOneAndUpdate({_id :productId}, {$inc : {'sells' : quantity, 'availableQuantity' : -quantity}})
    .exec()
    .then(result => {
        console.log(result);
        
        const newOrder = new Order({
            _id: new mongoose.Types.ObjectId(),
            UserId: currentId ,
            productId: result._id ,
            Quantity: req.body.quantity,
            Uprice: result.price,
            Tprice: result.price*quantity,
            Type:'Ordered'
            })
            newOrder.save().then(result =>{
                res.status(200).json({
                    products: result
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
// Bill
router.get('/bill',(req,res,next)=>{
    const currentId = req.body.currentId ;
    Order.find({Type:'Cart', UserId:currentId }).select("ProductId").select('quantity').select('Price').select('TPrice')
    .exec()               
    .then(docs => {
        var a = docs.length;
        var oldTotalPrice=0;
        var TotalPrice= 0;
        for (x=0;x<a;x++){
            TotalPrice= oldTotalPrice+docs[x].TPrice;
            oldTotalPrice= TotalPrice;  
        }
        
        console.log(docs,TotalPrice); 
        res.status(200).json({
            message: "This is your Bill",
            docs, 
            TotalPrice , 
        })
        .catch(err =>{
            console.log(err);
                res.status(500).json({
                error: err,
            })
        
    }) 
    
})
})
// Cart
//add to cart
router.post('/addtocart', (req,res,next) => {
    const currentId = req.body.currentId;
    const ProductId = req.body.ProductId;
    const quantity = req.body.quantity;
    User.find({_id:currentId}).exec()
    .then(result =>{
    Product.find({_id:ProductId}).exec().then(docs=>{
        console.log(docs);
        
        const newOrder = new Order({ 
            _id : new mongoose.Types.ObjectId(),
            ProductId: ProductId,
            UserId: currentId,
            quantity: req.body.quantity,
            Price: docs[0].price,
            TPrice: quantity * docs[0].price,
            Type: "Cart",
            SellerId: docs[0].Sellerid
            })
            newOrder
             .save()
             .then(results => {
                console.log(results);
                res.status(200).json({
                    message: 'added to your card'
                });
            })                
             .catch(err =>{
                 console.log(err)
                 res.status(500).json({
                     error: err
                 })
             })
            })
        })
    }); 
//See cart
router.post('/cart',(req,res,next)=>{
    // console.log("is posting");
    
    const currentId = req.body.currentId;
    Order.find({UserId:currentId,Type:'Cart'})
    .exec()
    .then(docs => {
        //console.log(docs);
        res.status(200).json({
            message: docs
            
        })
    }) 
    .catch(err =>{
        console.log(err);
            res.status(500).json({
            error: err,
        })
})
})
//buy cart
router.patch('/cart/buy', (req, res, next) => {
    console.log("hey");
    
    const currentId = req.body.currentId ;
    const productId = req.body.productId;
    const quantity=req.body.quantity;
    console.log(currentId);
    console.log(productId);
    
    
    Product
    .findOneAndUpdate({_id :productId}, {$inc : {'sells' : quantity, 'availableQuantity' : -quantity}})
    .exec()
    .then(result => {
        Order.update({UserId:currentId,Type:'Cart'},{$set:{Type:'Ordered'}})
        .exec()
        .then(docs => {
            console.log(docs);
                res.status(200).json({
                    message: docs
                })
        })    
        .catch(err => {
            console.log(err);
                res.status(500).json({
                    error: err
                })
        })
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
// See orders
router.post('/orders',(req,res,next)=>{
    const currentId = req.body.currentId;
    Order.find({UserId:currentId,Type:'Ordered'})
                .exec()
                .then(docs =>{
                    res.status(200).json({
                        message: "These are you orders",
                        docs
                    })
                })
                .catch(err => {
                    console.log(err);
                        res.status(500).json({
                            error: err
                    })
                })
})

/*-----------History------------*/
router.post('/history',(req,res,next)=>{
    const currentId = req.body.currentId;
    Order.find({UserId : currentId, Type:'History'})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            result : result
        })
    }) 
    .catch(err =>{
        console.log(err);
            res.status(500).json({
            error: err,
        })
})
})
// Favourite
// Add To Fav
router.post('/fav/add', (req, res, next) => {
    const currentId = req.body.currentId;
    const productid = req.body.productid;
    Product.find({_id:productid}).select('_id').then( result =>{
        const newFav = new Fav({
            UserId: currentId ,
            ProductId : result[0]._id  ,
          })
        newFav.save()
              .then(result => {
                  console.log(result);
                  res.status(200).json({
                      message: "Product added to favourite list",
                  })
              })
              .catch(err => {
                  console.log(err);
                  res.status(500).json({
                      error: err
                  })
              })
    })  
  })
// See Fav
router.get('/fav',(req,res,next)=>{
    const currentId = req.body.currentId;
    Favourite.find({'UserId':currentId },)
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({
            message: "Your Favourite Products",
            product: docs
        })
    }) 
    .catch(err =>{
        console.log(err);
            res.status(500).json({
            error: err,
        })
})
})

// FeedBack
// create
router.post('/feedback/add',(req,res,next)=>{
    const ProductId= req.body.ProductId;
    const currentId = req.body.currentId;
    Product.find({_id:ProductId}).then(result =>{
        User.find({_id:currentId}).then(docs => {
            const Image = docs[0].ProductId;
            const Name = docs[0].UserName;
            const newFeedBack = new User({
                ProductId: ProductId ,
                UserId: currentId ,
                Rate: req.body.Rate,
                Comment: req.body.Comment,
                UserImage: Image,
                UserName: Name,
            });
            newFeedBack.save().then(result => {
                console.log(result);
                res.status(200).json({
                    message: "Comment Posted",
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
        })
})
//Ban
router.patch('/ban',(req,res,next) =>{
    const productid = req.body.ProductId;
    Product.Update({_id:productid},{$inc : {'Bans': 1}}).then(result => {
        res.status(200).json({
            message:"Your Advice will be taken on consideration"
        })
    })
    .catch(err =>{
        res.status(500).json({
        error: err
        })
    })

})
//See FeedBacks
router.get('/feedback',(req,res,next) =>{
    const productid = req.body.ProductId;
    FeedBack.find({ProductId:productid}).exec().then(docs => {
        res.status(200).json({
            message:"Your Advice will be taken on consideration",
            docs
        })
    })
    .catch(err =>{
        res.status(500).json({
        error: err
        })
    })
})



module.exports = router;
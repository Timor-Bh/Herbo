const express = require("express");
const app = express();


const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const signUpRoutes = require("./Api/Routes/SignUp");
const logRoutes = require("./Api/Routes/Log");
const AdminRoutes = require("./Api/Routes/Admin");
const SellerRoutes = require("./Api/Routes/Seller");
const UserRoutes = require("./Api/Routes/User");

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Ahmed:ahmedpass@ahmed-dammn.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});

app.use("/signup", signUpRoutes);
app.use("/log", logRoutes);
app.use("/admin", AdminRoutes);
app.use("/seller", SellerRoutes);
app.use("/user", UserRoutes);

const path = require("path");
app.use(express.static(path.join(__dirname,'/Public')));

module.exports = app;
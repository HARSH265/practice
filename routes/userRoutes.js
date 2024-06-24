const express=require("express");
const router= express.Router();
const {handelGetAllUsers}=require("../controller/userController")
const User = require("../model/userModel")

//get all users
router.post("/", handelGetAllUsers)
module.exports =router;
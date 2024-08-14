const express = require('express')

const Product= require("../models/product.model.js")
const router=express.Router()
const {getProducts,getproduct,deleteproduct,updateproduct, createProducts}= require('../controller/product.controller')


router.get('/',getProducts)

router.get("/:id",getproduct)

router.delete("/:id",deleteproduct)

router.put("/:id",updateproduct)

router.post("/",createProducts)

module.exports=router
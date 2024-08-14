const express = require('express')
const mongoose = require('mongoose');
const Product= require('./models/product.model')
const productRoute= require('./routers/product.route')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routers
app.use("/api/post",productRoute)



mongoose.connect("mongodb+srv://rkavipriyan11:3OAMSwaTtxlLeSes@heucomundo.zub7a.mongodb.net/?retryWrites=true&w=majority&appName=HeucoMundo")
  .then(() => {  console.log('Connected!');
    app.listen(3000,()=>{
     console.log("Server online")
 })}
)
  .catch(()=>console.log('Error'));


const Product= require('../models/product.model')

const getProducts=async (req,res) => {
    try {
        const product=await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}

const getproduct=async (req,res) => {
    try {
        const{id}= req.params
        const product=await Product.findById(id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}

const createProducts=async (req,res) => {
    try {
        const product=await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}

const updateproduct=async (req,res) => {
    try {
        const{id}= req.params
        const product=await Product.findByIdAndUpdate(id,req.body)
       

        if(!product){
            res.status(404).json({message:"Not Found"})

        }

        const uproduct=await Product.findById(id)
        res.status(200).json(uproduct)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}


const deleteproduct =async (req,res) => {
    try {
        const{id}= req.params
        const product=await Product.findByIdAndDelete(id)
        res.status(200).json(product)

        if(!product){
            res.status(404).json({message:"Not Found"})

        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}

module.exports={getProducts,getproduct,deleteproduct,updateproduct,createProducts}
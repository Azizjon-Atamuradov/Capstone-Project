import Product from "../models/product.model.js";
import mongoose from "mongoose";



//// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});

    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ succes: false, message: "Server Error"})
    }
}
//////////////////////

////// Get one Product by ID

export const getProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json({ succes: true, data: product})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 
///////////////////////////////////////////////////////////////


////// Create a product
export const createProduct =  async (req, res) => {
    const product = req.body; 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ succes: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ succes: true, data: newProduct})

    } catch (error) {
        console.error("Error in Create product:", error.message );
        res.status(500).json({ succes: false, message: "Server Error"})
    }
}
/////////////////////////////////////////////////////////

//// Update a product
export const updateProduct =  async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true})
        res.status(200).json({ success: true, data: updatedProduct})
    } catch (error) {
        res.status(500).json ({ success: false, message: "Server Error"})
    }
}
////////////////////////////////////////////////////////

////// Delete a product
export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id"})
    }

    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ succes: true, message: "Product deleted"})
    } catch (error) {
        console.log("error in deleting product:", error.message);
        res.status(500).json({ succes: false, message: "Server Error"})
    }
}
///////////////////////////////////////////////////////
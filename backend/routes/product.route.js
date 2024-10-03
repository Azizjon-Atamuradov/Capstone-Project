import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();




//// Get all products
router.get("/", getProducts )
/////////////////////////////////////////////////

/// Get one product by ID
router.get('/:id', getProduct )
///////////////////////////////////////////////


////// Create a product
router.post("/", createProduct );
////////////////////////////////////////////////


////// Update a product
router.put("/:id", updateProduct);
/////////////////////////////////////////////


//////// Delete a product
router.delete("/:id", deleteProduct)
/////////////////////////////////////////



export default router;
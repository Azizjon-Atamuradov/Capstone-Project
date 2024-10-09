import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    image: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    phone: {
        type: Number,
        
    },
    location: {
        type: String,
        
    }
    


}, {
 timestamps: true
});


const Product = mongoose.model('Product', productSchema)

export default Product;
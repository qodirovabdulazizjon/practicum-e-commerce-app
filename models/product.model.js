import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: "https://placehold.co/600x400?text=Product"
  }
})


const Product = mongoose.model('products', productSchema)

export default Product

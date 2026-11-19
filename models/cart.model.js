import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
      },
      quantity: {
        type: Number,
        min: 1,
        default: 1,
      }
    }
  ]
})

const Cart = mongoose.model('cart', cartSchema)

export default Cart
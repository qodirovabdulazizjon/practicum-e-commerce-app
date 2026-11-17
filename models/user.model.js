import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchena = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'Pleace enter valid email'
    ]
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true })



const User = mongoose.model('users', userSchena)

export default User
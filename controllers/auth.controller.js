import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'

let users = []
const JWT_SECRET = process.env.JWT_SECRET

export const getLoginPage = (req, res) => {
  res.render('auth/login', {title: 'Kirish'})
}

export const getRegisterPage = (req, res) => {
  res.render('auth/register', {title: `Ro'yxatdan o'tish`, error: null})
}

export const registerUser = async (req, res) => {
  const {name, email, password} = req.body

  const existingUser = await User.findOne({email})
  if(existingUser){
    return res.status(400).render('auth/register', {title: `Ro'yxatdan o'tish`, error: 'Bu email tizimda mavjud!'})
  }

  await User.create({ name, email, password})
  
  res.redirect('/auth/login')
}

export const loginUser = async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email, password})
  if(user){
    const token = jwt.sign({id: user._id, email}, JWT_SECRET, {expiresIn: '1h'})
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // process.env.NODE_ENV === 'production'
      maxAge: 3600000,
    })
  }
  
  
  res.redirect('/auth/login')
}
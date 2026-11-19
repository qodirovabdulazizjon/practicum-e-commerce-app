import mongoose from 'mongoose'
import Cart from '../models/cart.model.js'
import Product from '../models/product.model.js'

export const getCartPage = async (req, res) => {
  const cart = await Cart.findOne({user: req.user.id}).populate('items.product')
  const items = (cart?.items ?? []).filter(item => item.product)
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return res.render('cart/index', {title: 'Savatcha', items, total, showNavbar: true})
}

export const addToCart = async (req, res) => {
  const {productId} = req.params
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(404).send('Mahsulot topilmadi')
  }

  const product = await Product.findById(productId)
  if (!product) {
    return res.status(404).send('Mahsulot topilmadi')
  }

  let cart = await Cart.findOne({user: req.user.id})
  if (!cart) {
    cart = new Cart({user: req.user.id, items: []})
  }

  const item = cart.items.find(entry => entry.product.toString() === productId)
  if (item) {
    item.quantity += 1
  } else {
    cart.items.push({product: product._id, quantity: 1})
  }

  await cart.save()
  return res.redirect('/cart')
}

export const updateCartItem = async (req, res) => {
  const quantity = Number(req.body.quantity)
  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).send('Miqdor kamida 1 ta bo‘lishi kerak')
  }

  const cart = await Cart.findOne({user: req.user.id})
  const item = cart?.items.find(entry => entry.product.toString() === req.params.productId)
  if (!item) {
    return res.status(404).send('Mahsulot savatchada topilmadi')
  }

  item.quantity = quantity
  await cart.save()
  return res.redirect('/cart')
}

export const removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({user: req.user.id})
  if (cart) {
    cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId)
    await cart.save()
  }

  return res.redirect('/cart')
}
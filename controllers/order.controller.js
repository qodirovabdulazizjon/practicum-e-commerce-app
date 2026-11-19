import Cart from '../models/cart.model.js'
import Order from '../models/order.model.js'

export const getOrdersPage = async (req, res) => {
  const orders = await Order.find({user: req.user.id}).sort({orderDate: -1})
  return res.render('orders/index', {title: 'Buyurtmalarim', orders, showNavbar: true})
}

export const createOrder = async (req, res) => {
  const cart = await Cart.findOne({user: req.user.id}).populate('items.product')
  const items = (cart?.items ?? []).filter(item => item.product)

  if (items.length === 0) {
    return res.redirect('/cart')
  }

  const orderItems = items.map(item => ({
    product: item.product._id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity
  }))
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  await Order.create({user: req.user.id, items: orderItems, total})
  cart.items = []
  await cart.save()

  return res.redirect('/order')
}
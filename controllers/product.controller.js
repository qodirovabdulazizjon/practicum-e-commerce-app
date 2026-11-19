import mongoose from 'mongoose'
import Product from '../models/product.model.js'

export const getProductsPage = (req, res) => {
  return Product.find()
    .sort({name: 1})
    .then(products => res.render('products/index', {title: 'Mahsulotlar', products, showNavbar: true}))
}

export const getProductById = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send('Mahsulot topilmadi')
  }

  const product = await Product.findById(req.params.id)
  if (!product) {
    return res.status(404).send('Mahsulot topilmadi')
  }

  return res.render('products/details', {title: product.name, product, showNavbar: true})
}
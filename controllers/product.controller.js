export const getProductsPage = (req, res) => {
  res.render('products/index', {title: `Mahsultlar`})
}

export const getProductById = (req, res) => {
  let product_name = 'Apple'
  res.render('products/details', {title: `${product_name}`})
}
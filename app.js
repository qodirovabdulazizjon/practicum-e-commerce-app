import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('layout', 'layout/layout')
app.use(expressEjsLayouts)
app.use(express.static('public'))

import authRoute from './routes/auth.js'
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'
import productRoute from './routes/product.js'

app.use('/auth', authRoute)
app.use('/cart', cartRoute)
app.use('/order', orderRoute)
app.use('/product', productRoute)


app.listen(PORT, ()=> {console.log(`Server running on port: ${PORT}`)})
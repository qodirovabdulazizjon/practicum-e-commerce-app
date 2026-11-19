import { Router } from 'express'
import {addToCart, getCartPage, removeCartItem, updateCartItem} from '../controllers/cart.controller.js'
import {verifyJWT} from '../middlewares/auth.middleware.js'

const router = Router()

router.use(verifyJWT)
router.get('/', getCartPage)
router.post('/items/:productId', addToCart)
router.post('/items/:productId/update', updateCartItem)
router.post('/items/:productId/remove', removeCartItem)

export default router
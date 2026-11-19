import { Router } from 'express'
import {createOrder, getOrdersPage} from '../controllers/order.controller.js'
import {verifyJWT} from '../middlewares/auth.middleware.js'

const router = Router()

router.use(verifyJWT)
router.get('/', getOrdersPage)
router.post('/checkout', createOrder)

export default router
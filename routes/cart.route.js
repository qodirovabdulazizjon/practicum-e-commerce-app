import { Router } from 'express'
import {getCartPage} from '../controllers/cart.controller.js'
const router = Router()

router.get('/', getCartPage)

export default router
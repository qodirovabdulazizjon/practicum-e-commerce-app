import { Router } from 'express'
import { getProductsPage, getProductById } from '../controllers/product.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', verifyJWT, getProductsPage)
router.get('/:id', getProductById)

export default router
import { Router } from 'express'
import { getProductsPage, getProductById } from '../controllers/product.controller.js'

const router = Router()

router.get('/', getProductsPage)
router.get('/:id', getProductById)

export default router
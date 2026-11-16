import { Router } from 'express'
import { getLoginPage, getRegisterPage,
  registerUser, loginUser
 } from '../controllers/auth.controller.js'

const router = Router()

router.get('/login', getLoginPage)
router.get('/register', getRegisterPage)

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router
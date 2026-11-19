import { Router } from 'express'
import { getLoginPage, getRegisterPage,
  registerUser, loginUser, logoutUser
 } from '../controllers/auth.controller.js'

const router = Router()

router.get('/login', getLoginPage)
router.get('/register', getRegisterPage)

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router
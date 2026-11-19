import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.token
  
  if (!token) return res.redirect('/auth/login')
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.clearCookie('token')
    return res.redirect('/auth/login')
  }
}
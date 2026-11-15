let users = []

export const getLoginPage = (req, res) => {
  res.render('auth/login', {title: 'Kirish'})
}

export const getRegisterPage = (req, res) => {
  res.render('auth/register', {title: `Ro'yxatdan o'tish`})
}

export const registerUser = (req, res) => {
  const {name, email, password} = req.body
  const user = {
    id: 1,
    name,
    email,
    password
  }
  users.push(user)
  res.redirect('/auth/login')
}

export const loginUser = (req, res) => {
  const {email, password} = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if(user){
    res.redirect('/products')
  }
  
}
import jwt from 'jsonwebtoken';
require('dotenv').config();

const checkLogin = (req, res) => {
  // if (error) return next(error);
  res.status(200).json({ user: req.user });
}

const login = (req, res) => {
  const { email, password } = req.body;

  jwt.sign({ email, password }, process.env.COOKIE_SECRET, { expiresIn: '2h' }, (error, TOKEN) => {
    if (error) return res.status(520).json({ error });
    res.cookie(process.env.NAME_COOKIE_SECRET, TOKEN, {
      maxAge: new Date(Date.now() + 1000000),
      httpOnly: false, 
      secure: false 
    });
    return res.status(200).json({ message: 'User logged with success' });
  });
}

const logout = (req, res) => {
  res.clearCookie(process.env.NAME_COOKIE_SECRET, req.cookies[process.env.NAME_COOKIE_SECRET], {
    maxAge: new Date(Date.now() + 1000000),
    httpOnly: false,
    secure: false
  });

  res.status(200).json({ message: 'Logout with success' });
}

export {
  checkLogin, login, logout
}
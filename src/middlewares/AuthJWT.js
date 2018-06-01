import jwt from 'jsonwebtoken';
require('dotenv').config();

export default function AuthJWT (req, res, next) {
  if (!req.cookies[process.env.NAME_COOKIE_SECRET]) return res.status(401).json({ error: 'UNAUTHORIZED' });

  const token = req.cookies[process.env.NAME_COOKIE_SECRET];
  jwt.verify(token, process.env.COOKIE_SECRET, (error, payload) => {
    if (error) return res.status(422).json({ error });

    req.user = payload;
    return next();
  });
}
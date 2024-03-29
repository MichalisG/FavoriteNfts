import jwt from 'jsonwebtoken';

export const generateToken = (account) => {
  const token = jwt.sign({account}, process.env.JWT_SECRET);

  return token;
}
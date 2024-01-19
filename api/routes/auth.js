import express from 'express';
import { generateToken } from '../services/jwt.js';
import { SiweMessage } from 'siwe'

const authRouter  = express.Router();

authRouter.post('/login', async (req, res) => {
  try {
    const {signature, message} = req.body;
    
    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.verify({signature})
    
    const accessToken = generateToken(fields.address);
    
    res.json({accessToken});
  }
  catch(error) {
    res.status(500).send();
  }
});

export default authRouter;
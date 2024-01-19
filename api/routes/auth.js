import express from 'express';
import { generateToken } from '../services/jwt.js';
import { SiweMessage } from 'siwe'

const authRouter  = express.Router();

authRouter.post('/login', async (req, res) => {
  try {
    const {signature, message} = req.body;
    
    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.verify({signature})

    if (!fields.success) {
      return res.status(401).send();
    }
    
    const accessToken = generateToken(fields.data.address);
    
    res.json({accessToken});
  }
  catch(error) {
    res.status(500).send();
  }
});

export default authRouter;
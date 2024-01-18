import express from 'express';
import { getEvmAccount } from '../services/auth.js';
import { generateToken } from '../services/jwt.js';

const authRouter  = express.Router();

authRouter.post('/login', async (req, res) => {
  try {
    const {signature, rawMessage} = req.body;
    
    const {account, error} = await getEvmAccount(signature, rawMessage);
    
    if (error) {
      res.status(401).send();
      return;
    }

    const accessToken = generateToken(account);
    
    res.json({accessToken});
  }
  catch(error) {
    res.status(500).send();
  }
});

export default authRouter;
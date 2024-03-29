import express from 'express';
import { getContactNfts, getNft } from '../services/moralis.js';
import {authenticateJWT} from '../middlewares/auth.js';

const nftsRouter  = express.Router();

nftsRouter.get('/:address', authenticateJWT, async (req, res) => {
  try {
    const {address} = req.params;
    const {chain, cursor} = req.query;
    const data = await getContactNfts(address, cursor, chain);
    
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(500).send();
  }
});

nftsRouter.get('/:address/:tokenId', authenticateJWT, async (req, res) => {
  try {
    const {address, tokenId} = req.params;
    const {chain} = req.query;
    const data = await getNft(address, tokenId, chain);
    
    res.json(data);
  } catch (e) {
    console.log(e)
    res.status(500).send();
  }
});

export default nftsRouter;
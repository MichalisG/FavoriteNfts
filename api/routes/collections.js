import express from 'express';
import { getCollectionMetadata } from '../services/moralis.js';
import {authenticateJWT} from '../middlewares/auth.js';

const collectionsRouter  = express.Router();

collectionsRouter.get('/:address', authenticateJWT, async (req, res) => {
  try {
    const {address} = req.params;
    const {chain} = req.query;
    const data = await getCollectionMetadata(address, chain);
    
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(500).send();
  }
});

export default collectionsRouter;
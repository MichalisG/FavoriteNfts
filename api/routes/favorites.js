import express from 'express';
import Favorite from '../models/favoriteNFT.js';
import {authenticateJWT} from '../middlewares/auth.js';

const router  = express.Router();

router.get('/', authenticateJWT, async (req, res) => {
  try{

    const {
      page = 1,
      pageSize = 10,
    } = req.query;
    const {account} = req.user;
    
    const userFavorites = await Favorite.find({ ethereumAccount: account })
  
    res.json(userFavorites.map(favorite => favorite.favoriteNfts[0]));
  }catch(e){
    console.log(e)
    res.status(500).send();
  }
})

router.post('/', authenticateJWT, async (req, res) => {
  try {
    const { nft } = req.body;
    const { account } = req.user;
    
    const favoriteNFT = new Favorite({
      ethereumAccount: account,
      favoriteNfts: [nft]
    });
    
    await favoriteNFT.save();
    
    res.status(201).send();
  } catch(e) {
    console.log("🚀 ~ router.post ~ e:", e)
    res.status(500).send();
  }
})

router.delete('/', authenticateJWT, async (req, res) => {
  try {
    const { nft } = req.body;
    const { account } = req.user;
    
    await Favorite.deleteOne({
      ethereumAccount: account,
      'favoriteNfts.token_address': nft.token_address,
      'favoriteNfts.token_id': nft.token_id,
    });
    
    res.status(201).send();
  } catch(e) {
    console.log("🚀 ~ router.post ~ e:", e)
    res.status(500).send();
  }
})

export default router;
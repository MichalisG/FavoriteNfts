import express from 'express';
import Favorite from '../models/favoriteNFT.js';
import {authenticateJWT} from '../middlewares/auth.js';

const router  = express.Router();

router.get('/', authenticateJWT, async (req, res) => {
  const {
    page = 1,
    pageSize = 10,
  } = req.query;
  const {account} = req.user;

  const userFavorites = await Favorite.find({ ethereumAccount: account })
      
  res.json(userFavorites);
})

router.post('/', authenticateJWT, async (req, res) => {
  const { nft } = req.body;
  const { account } = req.user;

  Favorite.updateOne(
    { ethereumAccount: account },
    { $addToSet: { favoriteNfts: nft } },
    { upsert: true },
    (err, result) => {
      if (err) throw err;

      res.status(201).send();
    }
  );

  res.status(201).send();
})

export default router;
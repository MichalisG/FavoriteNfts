import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Moralis from 'moralis';
import favotitesRoutse from './routes/favorites.js';
import nfts from './routes/nfts.js';
import authRouter from './routes/auth.js';
import collectionsRouter from './routes/collections.js';

const port = process.env.PORT || 8080;

const db = mongoose.connection

const app = express()

app.use(express.json())
app.use(cors())

app.use('/favorites', favotitesRoutse);
app.use('/nfts', nfts);
app.use('/auth', authRouter);
app.use('/collections', collectionsRouter);

const start = async () => {
  await mongoose.connect(process.env.DATABASE_URL)

  console.log('Connected to database');

  await Moralis.start({ 
    apiKey: process.env.MORALIS_API_KEY,
  });

  console.log('Connected to moralis');

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

start();
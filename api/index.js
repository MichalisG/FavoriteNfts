import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import Moralis from 'moralis';
import favotitesRoutse from './routes/favorites.js';
import nfts from './routes/nfts.js';
import authRouter from './routes/auth.js';

const port = process.env.PORT || 8080;

const db = mongoose.connection

const app = express()

app.use(express.json())

app.use('/favorites', favotitesRoutse);
app.use('/nfts', nfts);
app.use('/auth', authRouter);

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
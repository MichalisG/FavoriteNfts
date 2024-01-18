import mongoose from 'mongoose';

const favoriteNFTSchema = new mongoose.Schema({
  ethereumAccount: {
    type: String,
    required: true,
  },
  favoriteNfts: [
    {
      token_address: {
        type: String,
        required: true,
      },
      token_id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      owner_of: {
        type: String,
        required: true,
      },
      symbol: {
        type: String,
        required: true,
      },
      token_uri: {
        type: String,
        required: true,
      },
      metadata: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
  ],
});

const FavoriteNFTModel = mongoose.model("FavoriteNFT", favoriteNFTSchema);

export default FavoriteNFTModel;

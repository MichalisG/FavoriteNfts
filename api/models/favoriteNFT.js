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
      },
      media: {
        type: mongoose.Schema.Types.Mixed,
      },
    },
  ],
});

favoriteNFTSchema.index({ ethereumAccount: 1, 'favoriteNfts.token_address': 1, 'favoriteNfts.token_id': 1 }, { unique: true });
const FavoriteNFTModel = mongoose.model("FavoriteNFT", favoriteNFTSchema);

export default FavoriteNFTModel;

export interface MediaCollection {
  width: number;
  height: number;
  url: string;

}

export interface Media {
  mimetype: string;
  original_media_url: string;
  media_collection: {
    high: MediaCollection,
    low: MediaCollection,
    medium: MediaCollection,
  }
}

export interface NFT {
  token_address: string;
  token_id: string;
  name: string;
  symbol: string;
  owner_of: string;
  token_uri: string;
  metadata?: string;
  media?: Media;
}
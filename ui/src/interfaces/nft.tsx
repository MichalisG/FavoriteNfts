import Collection from "@@/components/Collection";

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

export interface Collection  {
  token_address: string;
  name: string;
  symbol: string;
  contract_type: string;
  synced_at: string;
  possible_spam: boolean;
  verified_collection: boolean;
  collection_logo: string;
  collection_banner_image?: string | null;
  collection_category: string | null;
  project_url?: string | null;
  wiki_url?: string | null;
  discord_url?: string | null;
  telegram_url?: string | null;
  twitter_username?: string | null;
  instagram_username?: string | null;
}
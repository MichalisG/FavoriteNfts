'use client'

import { useEffect, useState } from "react";
import { NFT } from "@@/interfaces/nft";
import Image from "next/image";
import { MediaCollection } from "@@/interfaces/nft";
import Icons from "./Icons";

interface Props {
  nft: NFT;
  isFavorite?: boolean;
  addToFavorites?: (nft: NFT) => void;
  removeFromFavorites?: (nft: NFT) => void;
}
const defaultImage = {
  url: 'https://t4.ftcdn.net/jpg/01/96/72/81/360_F_196728180_TMrQ8pEE9fKPqsJ8qdFrCSyhhb7W1kbL.jpg',
  width: 500,
  height: 500,
}
const Card = (props: Props) => {
  const [image, setImage] = useState<MediaCollection>(defaultImage);
  const {
    nft,
    isFavorite,
    addToFavorites = () => {},
    removeFromFavorites = () => {},
  } = props;

  const metadata = typeof nft.metadata === 'object' ? nft.metadata : JSON.parse(nft.metadata as string);

  const isValidImageUrl = (image: string) => {
    return image.startsWith('http');
  }

  useEffect(() => {
    const nftImage = nft.media?.media_collection?.medium || {
      url: metadata.image,
      width: 500,
      height: 500,
    };

    setImage(nftImage);
  }, [nft, metadata.image]);


  const handleFavoriteAction = () => {
    if (isFavorite) {
      removeFromFavorites(nft);
    } else {
      addToFavorites(nft);
    }
  }

  return (
    <div className="card m-4 w-56 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="h-56 w-full object-cover"
          src={image.url} alt={nft.token_id}
          unoptimized
          width={500}
          height={500}
          onError={(e) => {
            setImage(defaultImage);
          }}
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-sm">{nft.name} #{nft.token_id}</h3>
        <div className="card-actions flex justify-evenly mt-4">
          <button className="btn btn-primary w-full btn-sm p-0" onClick={handleFavoriteAction}>
            {isFavorite
            ? <><Icons.HeartSolid/> Remove from Favorites</>
            : <><Icons.Heart/> Add to Favorites</>
          }
            
          </button>
          <button className="btn btn-secondary w-full btn-sm">Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
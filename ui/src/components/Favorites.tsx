import React, { useEffect } from 'react'
import useCollection from '@@/hooks/useCollection';
import Card from '@@/components/Card';
import {NFT} from '@@/interfaces/nft';
import useFavorites from '@@/hooks/useFavorites';

type Props = {
}

const Favorites = (props: Props) => {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite, reloadFavorites} = useFavorites();

  const renderNfts = () => {
    return favorites.map((nft: NFT, index) => (
      <Card
        key={index}
        nft={nft as NFT}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isFavorite={isFavorite(nft.token_address, nft.token_id)}
      />
    ))
  }

  return (
    <div>
      <div className='flex flex-wrap justify-start'>
        {renderNfts()}
      </div>
    </div>
  )
}

export default Favorites;
import React, { useEffect } from 'react'
import useCollection from '@@/hooks/useCollection';
import Card from '@@/components/Card';
import {NFT} from '@@/interfaces/nft';
import useFavorites from '@@/hooks/useFavorites';

type Props = {
  collectionAddress: string;
}

const Collection = (props: Props) => {
  const {collectionAddress} = props;
  const { collectionPages, fetchCollection, loadMore } = useCollection({address: collectionAddress});
  const { favorites, addToFavorites, removeFromFavorites, isFavorite, reloadFavorites} = useFavorites();

  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  const renderNfts = () => {
    const nfts = collectionPages.map((page) => page.result).flat();

    return nfts.map((nft, index) => (
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
      Collection {props.collectionAddress}
      <div className='flex flex-wrap justify-between'>
        {renderNfts()}
      </div>
      <div className='flex justify-center'>
        {
          collectionAddress && collectionPages[collectionPages.length - 1]?.cursor
          ? <button className='btn btn-primary my-8' onClick={loadMore}>Load More</button>
          : null
        }
      </div>
    </div>
  )
}

export default Collection;
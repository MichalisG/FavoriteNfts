'use client'

import React, {useState} from 'react';
import Collection from '@@/components/Collection';

const Browse = () => {
  const [collectionAddress, setCollectionAddress] = useState<string>('' as string);

  const onCollectionAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO validate that it is a valid ethereum address
    setCollectionAddress(event.target.value);
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Find your favorite NFTs</h1>
          <p className="py-6">Enter the Collection address and find your favorite NFT</p>
        </div>
      </div>
      <h4 className="text-2xl font-bold py-4">Enter Collection Address</h4>
      <input value={collectionAddress} type="text" placeholder="Address" className="input input-bordered w-full" onChange={onCollectionAddressChange}/>
      <div className="py-6">
        <Collection collectionAddress={collectionAddress}/>
      </div>
    </div>
  )
}

export default Browse;
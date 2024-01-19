'use client'

import React, {useState} from 'react';
import Favorites from '@@/components/Favorites';

const Browse = () => {

  const onCollectionAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO validate that it is a valid ethereum address
    setCollectionAddress(event.target.value);
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">All your Favorites NFTs</h1>
        </div>
      </div>
      <div className="py-6">
        <Favorites/>
      </div>
    </div>
  )
}

export default Browse;
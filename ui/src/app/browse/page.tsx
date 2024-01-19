'use client'

import React, {useState} from 'react';
import Collection from '@@/components/Collection';
import { useSearchParams, useRouter } from 'next/navigation'
import useCollectionMetadata from '@@/hooks/useCollectionMetadata';
import Image from 'next/image';
import useAuth from '@@/hooks/useAuth';

const Browse = () => {
  const {jwt, login} = useAuth();
  const searchParams = useSearchParams()
  const { replace } = useRouter();
  const { collection } = useCollectionMetadata({address: searchParams.get('address') || ''})

  const collectionAddress = searchParams.get('address') || '';

  const onCollectionAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('address', event.target.value);
    replace(`?${params.toString()}`)
  }

  if(!jwt) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Login to use the app</h1>
          </div>
        </div>
        <button className="btn btn-md btn-primary mr-2" onClick={login}>Login</button>
      </div>
    )
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
      <div className='w-full mt-20 text-center'>
        {
          collection?.collection_banner_image ? <Image
            className="h-56 w-full object-cover"
            src={collection?.collection_banner_image}
            alt={'banner'}
            unoptimized
            width={500}
            height={500}
          /> : null
        }

        <h2 className="text-4xl font-bold py-4 mt-8 text-center">{collection?.name}</h2>
      </div>
      <div className="py-6">
        <Collection collectionAddress={collectionAddress}/>
      </div>
    </div>
  )
}

export default Browse;
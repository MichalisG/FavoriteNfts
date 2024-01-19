'use client'

import { use, useCallback, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import useAuth from './useAuth'
import {NFT} from '@@/interfaces/nft';

import {fetchCollection} from '../services/collections';
type Props = {
  address: string
}

interface CollectionPage {
  cursor: string,
  page: number,
  page_size: number,
  result: NFT[]
}

const useCollection = (props: Props) => {
  const {address} = props;
  const [collectionPages, setCollectionPages] = useState<CollectionPage[]>([]);
  const { jwt } = useAuth();

  const fetchCollection = useCallback(async () => {
    try {
      if (!jwt || !address) return

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nfts/${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
      })
      const res = await response.json()
      setCollectionPages([res])
    }catch{
      console.log('failed to fetch collection')
    }
  }, [jwt, address])


  const loadMore = useCallback(async () => {
    try {
      if (!jwt || !address) return
      let cursor = ''

      if(collectionPages.length > 0){
        cursor = collectionPages[collectionPages.length - 1].cursor
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nfts/${address}?cursor=${cursor}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
      });
      const res = await response.json();
      setCollectionPages([...collectionPages, res]);
    }catch{
      console.log('failed to fetch collection')
    }
  }, [jwt, address, collectionPages])


  return { collectionPages, fetchCollection, loadMore}
}

export default useCollection;
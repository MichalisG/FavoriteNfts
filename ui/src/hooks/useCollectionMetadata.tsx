'use client'

import { useCallback, useEffect, useState } from 'react'
import useAuth from './useAuth'
import {Collection} from '@@/interfaces/nft';

type Props = {
  address: string
}

const useCollectionMetadata = (props: Props) => {
  const {address} = props;
  const [collection, setCollection] = useState<Collection | null>(null);
  const { jwt } = useAuth();

  const fetchCollectionMetadata = useCallback(async () => {
    try {
      if (!jwt || !address) return

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
      })
      const res = await response.json()
      setCollection(res)
    }catch{
      console.log('failed to fetch collection')
    }
  }, [jwt, address])

  useEffect(() => {
    fetchCollectionMetadata()
  }, [fetchCollectionMetadata])


  return { collection, fetchCollectionMetadata }
}

export default useCollectionMetadata;
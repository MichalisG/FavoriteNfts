'use client'

import { useCallback, useEffect } from 'react'
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import useAuth from './useAuth'
import { NFT } from '@@/interfaces/nft';
import { favoritesState } from '@@/state/favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const { jwt } = useAuth();

  const fetchFavorites = useCallback(async () => {
    try {
      if (!jwt) return

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
      })

      const data = await response.json()
      setFavorites(data)
    }catch{
      console.log('failed to fetch favorites')
    }
  }, [jwt, setFavorites])

  const addToFavorites = useCallback(async (nft: NFT) => {
    try {
      if (!jwt) return

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({ nft: {
          token_address: nft.token_address,
          token_id: nft.token_id,
          token_uri: nft.token_uri,
          name: nft.name,
          symbol: nft.symbol,
          owner_of: nft.owner_of,
          metadata: nft.metadata,
          media: nft.media,
        } })
      })
      fetchFavorites()
    }catch{
      console.log('failed to add new collection')
    }
  }, [jwt, fetchFavorites])

  const removeFromFavorites = useCallback(async (nft: NFT) => {
    try {
      if (!jwt) return

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({ nft: {
          token_address: nft.token_address,
          token_id: nft.token_id,
        }})
      })
      fetchFavorites()
    }catch{
      console.log('failed to remove from favorites')
    }
  }, [jwt, fetchFavorites])

  const isFavorite = useCallback((token_address: string, token_id: string) => {
    if(!favorites) return false;

    return Boolean(favorites.find((nft: NFT) => {
      return nft.token_address === token_address && nft.token_id === token_id
    }))
  }, [favorites])

  useEffect(() => {
    if(favorites.length === 0) {
      fetchFavorites()
    }
  }, [fetchFavorites, favorites.length])

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    reloadFavorites: fetchFavorites,
  }
}

export default useFavorites;
'use client'

import { use, useCallback, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { useSignMessage, useChainId } from 'wagmi'
import { SiweMessage } from 'siwe'


const useAuth = () => {
  const [jwt, setJwt] = useState<string | null>(null);
  const chainId = useChainId();

  const account = useAccount()
  const { signMessageAsync } = useSignMessage()
  
  const loadJwt = () => {
    const saved_jwt = localStorage.getItem('FAVORITES_JWT')
    if (saved_jwt) {
      return saved_jwt
    }
    return ''
  }

  const login = useCallback(async () => {
    try {
      if (!account) return
      const message = new SiweMessage({
        domain: window.location.host,
        address: account.address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        chainId,
        version: '1',
      })

      const signature = await signMessageAsync({message: message.prepareMessage()})

      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          signature,
          message,
        }),
      })
      const { accessToken } = await response.json()
    
      if (accessToken) {
        setJwt(accessToken)
        localStorage.setItem('FAVORITES_JWT', accessToken)
      }
    }catch{
      console.log('failed to sign message')
    }
  }, [signMessageAsync, account, chainId])

  const logout = useCallback(() => {
    localStorage.removeItem('FAVORITES_JWT')
    setJwt(null)
  }, [])

  useEffect(() => {
    setJwt(loadJwt())
  }, [])

  return { jwt, login, logout }
}

export default useAuth;
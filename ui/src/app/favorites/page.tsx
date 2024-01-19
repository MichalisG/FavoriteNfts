'use client'

import React, {useState} from 'react';
import Favorites from '@@/components/Favorites';
import useAuth from '@@/hooks/useAuth';

const Browse = () => {
  const {jwt, login} = useAuth();

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
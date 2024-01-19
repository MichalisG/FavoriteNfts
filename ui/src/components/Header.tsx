'use client'

import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import useAuth from '@@/hooks/useAuth';

interface Props {

}

const menu = [
  {
    label: 'My Favorites',
    href: '/favorites',
  },
  {
    label: 'Browse',
    href: '/browse',
  },
]

const Header = (props: Props) => {
  const { jwt, login, logout } = useAuth();

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href='/'>{'Home'}</Link>
              </li>
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
              )}
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost text-xl hidden lg:inline-flex">Favorites</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))
          }
          </ul>
        </div>
        <div className="navbar-end">
          {
            !jwt
            ? <button className="btn btn-sm btn-primary mr-2" onClick={login}>Login</button>
            : <button className="btn btn-sm btn-primary mr-2" onClick={logout}>Logout</button>
          }
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}

export default Header;
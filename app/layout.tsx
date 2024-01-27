"use client"

import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/Total Fashion-logos_transparent.png'
import Footer from './components/footer'
import './globals.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLinksVisible, setLinksVisible] = useState(false);

  const handleClick = () => {
    setLinksVisible((prevValue) => !prevValue);
  };
  
  return (
    <html lang="en">
      <head>
        <title> Total Fashion Roxbury </title>
      </head>
      <body> 
        <nav className='main-menu'>
          <div className='top-nav'>
          <Link href={'./'}>
            <Image className='Logo' src={Logo} alt="logo" />
          </Link>
          <Link className="top_nav_element" href='./'> Home </Link>
          <Link className="top_nav_element" href='./services'> Services </Link>
          <Link className="top_nav_element" href='./contact'> Contact </Link>
          <Link className='hamburger-menu' href="#" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} className='fa-bars' size='4x'/>
          </Link>
          </div>
      {/* TODO: revert layout.tsx into server side rendered page 
          by seperating the hamburger menu into it's own component*/}
          <div className='hamburger-links' style={{ display: isLinksVisible ? 'flex' : 'none' }}>
            <Link className="hamburger_element" href='./'> Home </Link>
            <Link className="hamburger_element" href='./services'> Services </Link>
            <Link className="hamburger_element" href='./contact'> Contact </Link>
          </div>
        </nav>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
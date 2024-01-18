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

  const myFunction = () => {
    setLinksVisible((prevValue) => !prevValue);
  };
  return (
    <html lang="en">
      <head>
        <title> Total Fashion Roxbury </title>
      </head>
      <body>
        <nav className='main-menu'>
          <Link href={'./'}>
            <Image className='Logo' src={Logo} alt="logo" />
          </Link>
          <Link className="nav_element" href='./'> Home </Link>
          <Link className="nav_element" href='./services'> Services </Link>
          <Link className="nav_element" href='./contact'> Contact </Link>
          <Link className='hamburger-menu' href="#" onClick={myFunction}>
            <FontAwesomeIcon icon={faBars} />
          </Link>
        </nav>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/Total Fashion-logos_transparent.png'
import Footer from './components/footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
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
          <Link className='hamburger-menu' >
            <i></i>
          </Link>
        </nav>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/Total-Fashion-Logo.jpg'
import Footer from './../components/footer'

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
        <nav>
          <Image src={Logo} height="100" alt="logo" />
          <Link href='./'> Home </Link>
          <Link href='./services'> Services </Link>
          <Link href='./contact'> Contact </Link>
        </nav>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
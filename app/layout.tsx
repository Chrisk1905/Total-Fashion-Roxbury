import Footer from './components/footer'
import HamburgerMenu from './hamburger-menu/hamburger-menu'
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
        <HamburgerMenu/>     
        {children}
        <Footer/>
      </body>
    </html>
  )
}
'use client';
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/Total Fashion-logos_transparent.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css'



export default function HamburgerMenu(){

    const [isLinksVisible, setLinksVisible] = useState(false);

    const handleClick = () => {
        setLinksVisible((prevValue) => !prevValue);
    };

    return (
        <>
        <nav className={styles.mainMenu}>
          <div className={styles.topNav}>
          <Link href={'./'}>
            <Image className={styles.Logo} src={Logo} alt="logo" />
          </Link>
          <Link className={styles.top_nav_element} href='./'> Home </Link>
          <Link className={styles.top_nav_element} href='./services'> Services </Link>
          <Link className={styles.top_nav_element} href='./contact'> Contact </Link>
          <Link className={styles.hamburgerMenu} href="#" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} className={styles.faBars} size='4x'/>
          </Link>
          </div>
        </nav>
        <div className={styles.hamburgerLinks} style={{ display: isLinksVisible ? 'flex' : 'none' }}>
            <Link className={styles.hamburgerElement} href='./'> Home </Link>
            <Link className={styles.hamburgerElement} href='./services'> Services </Link>
            <Link className={styles.hamburgerElement} href='./contact'> Contact </Link>
        </div>
        </>
    )
}
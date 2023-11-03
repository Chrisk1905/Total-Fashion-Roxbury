import Image from 'next/image'
import Link from 'next/link'
import Hero_Image from 'public/Total-Fashion-Hero.jpg'
import Footer from './components/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.Hero_Container}>
        <Image 
          src={Hero_Image}
          alt="Total Fasion Roxbury"
          className={styles.Hero_Image}
          />
        <div className={styles.Hero_Content} >
          <p> Total Fashion Roxbury is a woman-owned, family operated bussiness, 
            proudly serving the White Center community. </p>
          <p> At Total Fashion, our mission is to provide dependable alterations and dry cleaning services. 
            With a commitment to quality, precision, and care, we take pride in providing our clients 
            with elegance and a proper fit to their wardrobe.</p>
          <p> As a family business, we embrace the values of friendly service, integrity and fostering long-lasting 
            relationships with our customers and community. </p>
        </div>
      </div>
    </>
  );
}

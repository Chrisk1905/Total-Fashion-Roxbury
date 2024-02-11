"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Dry_Cleaning from '/public/Dry_Cleaning.svg'
import Alteration from '/public/trousers.png'
import Wedding_Dress from '/public/wedding-dress.png'
import { useEffect,useState } from 'react'

export default function Page(){
  const [slideIndex, setSlideIndex] = useState(0); // Index starts from 0

  function plusDivs(n) {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex >= slides.length) {
        return 0; // Wrap around to the first slide
      } else if (newIndex < 0) {
        return slides.length - 1; // Wrap around to the last slide
      }
      return newIndex;
    });
  }
  
  const slides = [
    {
      image: Dry_Cleaning,
      alt: "Dry Cleaning",
      heading: "Dry Clean",
      description: "We do Dry Cleaning with professional and timely care."
    },
    {
      image: Alteration,
      alt: "Alterations and Repairs",
      heading: "Alterations & Repairs",
      description: "Leave your clothes in skilled hands! We'll fix up your torn clothes, or tailor to the perfect fit!"
    },
    {
      image: Wedding_Dress,
      alt: "Wedding Dress",
      heading: "Wedding Dress",
      description: "We have over a decade of wisdom and experience in fitting wedding dresses."
    }
  ];

  return (
      <div className={styles.service_container}>
          <button onClick={() => plusDivs(-1)}>Previous</button>
          <div className={styles.card}>
            <Image src={slides[slideIndex].image} alt={slides[slideIndex].alt} width={200}></Image>
            <h1>{slides[slideIndex].heading}</h1>
            <p>{slides[slideIndex].description}</p>
          </div>        
          {/* <div className={styles.card}>
              <Image src={Dry_Cleaning} alt="Dry Cleaning" width={200}></Image>
              <h1>Dry Clean</h1>
              <p>We do Dry Cleaning with professional and timely care.</p>
          </div>
          <div className={styles.card}>
              <Image src={Alteration} alt="Alterations and Repairs" width={200}></Image>
              <h1>Alterations & Repairs</h1>
              <p>Leave your clothes in skilled hands! We'll fix up your torn clothes, or tailor 
                  to the perfect fit!</p>
          </div>
          <div className={styles.card}>
              <Image src={Wedding_Dress} alt="Wedding Dress" width={200}></Image>
              <h1>Wedding Dress</h1>
              <p>We have over a decade of wisdom and experiece in fitting wedding dresses.</p>
          </div> */}
          <button onClick={() => plusDivs(1)}>Next</button>
      </div>
    );
}
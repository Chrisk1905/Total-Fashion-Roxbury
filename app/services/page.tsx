"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Dry_Cleaning from '/public/Dry_Cleaning.svg'
import Alteration from '/public/trousers.png'
import Wedding_Dress from '/public/wedding-dress.png'
import { useEffect,useState } from 'react'

export default function Page(){
  const [slideIndex, setSlideIndex] = useState(0); // Index starts from 0 
  
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
      {slides.map((slide, index) => (
        <div key={index} className={styles.card}>
          <Image src={slide.image} alt={slide.alt} width={200}></Image>
          <h1>{slide.heading}</h1>
          <p>{slide.description}</p>
        </div>
      ))}        
    </div>
  );
}
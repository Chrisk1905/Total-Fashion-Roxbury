import styles from './page.module.css'
import Image from 'next/image'
import Dry_Cleaning from '/public/Dry_Cleaning.svg'
import Alteration from '/public/trousers.png'
import Wedding_Dress from '/public/wedding-dress.png'

export default function Page(){
    return (
        <>
            <div className={styles.service_container}>
                <div className={styles.card}>
                    <Image src={Dry_Cleaning} alt="Dry Cleaning" width={200}></Image>
                    <h1>Dry Clean</h1>
                    <p>We do Dry Cleaning with professional and timely care.</p>
                </div>
                <div className={styles.card}>
                    <Image src={Alteration} alt="Alterations and Repairs" width={200}></Image>
                    <h1>Alterations & Repairs</h1>
                    <p>Leave your clothes in skilled hands! We'll fix up your torn clothes, or tailor to the perfect fit!</p>
                </div>
                <div className={styles.card}>
                    <Image src={Wedding_Dress} alt="Wedding Dress" width={200}></Image>
                    <h1>Wedding Dress</h1>
                    <p>We have over a decade of wisdom and experiece in fitting wedding dresses.</p>
                </div>
            </div>
       </>
    );
}
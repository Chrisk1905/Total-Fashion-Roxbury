import styles from './page.module.css'


export default function Page(){
    return (
        <>
            <div className={styles.service_container}>
                <div className={styles.card}>
                    <h1>Dry Clean</h1>
                    <p>We do Dry Cleaning. We'll take professional and timely care.</p>
                </div>
                <div className={styles.card}>
                    <h1>Alterations & Repairs</h1>
                    <p>We'll fix up your torn clothes, or alter for the perfect fit!</p>
                </div>
                <div className={styles.card}>
                    <h1>Wedding Dress</h1>
                    <p>We have over a decade of wisdom and experiece in fitting wedding dresses.</p>
                </div>
            </div>
       </>
    );
}
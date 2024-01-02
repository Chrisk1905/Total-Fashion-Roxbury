import styles from './page.module.css'


export default function Page(){
    return (
        <div className={styles.contact}>
            <h1>Contact us</h1>
            <h2>Phone ☎️</h2>
            <p>(206)768-1063</p>
            <p>English/한국어</p>
            <h2>Location 🏠</h2>
            <p>1618 SW Roxbury St, Seattle, WA 98106</p>
        </div>
    )
}
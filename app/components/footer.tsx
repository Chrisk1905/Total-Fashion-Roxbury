import Map from './map'
import styles from './page.module.css'

export default function Footer(){

    return (
        <div className={styles.footer}>
            <ul className={styles.bussiness_hours}>
                <li>Monday 9AM-6PM</li>
                <li>Tuesday 9AM-6PM</li>
                <li>Wednesday 9AM-6PM</li>
                <li>Thursday 9AM-6PM</li>
                <li>Friday 9AM-6PM</li>
                <li>Saturday 9AM-3PM</li>
                <li>Sunday Closed</li>
            </ul>
            <Map />
         </div>
    )
}



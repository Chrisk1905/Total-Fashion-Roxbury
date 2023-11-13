import Map from './map'
import styles from './page.module.css'

export default function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.business_hours}>
                <p className={styles.announcement}>📢 CLOSED THANKSGIVING DAY THURSDAY NOV. 23rd</p>
                <table>
                    <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9AM-6PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9AM-6PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9AM-6PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9AM-6PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>9AM-6PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>9AM-3PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>CLOSED</td>
                    </tr>
                    </tbody>
                </table>   
            </div>
            <Map />
         </footer>
    )
}



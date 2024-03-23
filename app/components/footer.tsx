import TF_Map from './map'
import styles from './page.module.css'

async function getHours(){
    const contentful = require('contentful')

    const client = contentful.createClient({
      space: 'blcj65asgwii',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'rdGQ4czvp9J_QZz5px6ujIXmGCAypOjv7K6H9ucvm08'
    })
    
    const resp = await client.getEntry('1ZVUTCjt4ejiS7hxmwOWUd')
      .then((entry: object) => {
          console.log(entry) 
        }) 
      .catch(console.error)
    
    return resp
}

export default function Footer(){
    const hours = getHours();
    return (
        <footer className={styles.footer}>
            <div className={styles.business_hours}>
                <p className={styles.announcement}>  📢 </p>
                <table>
                    <tbody>
                    <tr>
                        <td>{hours}</td>
                    </tr>
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
            <TF_Map />
         </footer>
    )
}



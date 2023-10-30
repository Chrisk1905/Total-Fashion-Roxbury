import Map from './map'

import styles from '../app/page.module.css'


export default function Footer(){

    return (
        <div className='footer'>
            <ul>
                <li>Monday 9AM-6PM</li>
                <li>Tuesday 9AM-6PM</li>
                <li>Wednesday 9AM-6PM</li>
                <li>Thursday 9AM-6PM</li>
                <li>Friday 9AM-6PM</li>
                <li>Saturday 9AM-4PM</li>
                <li>Sunday closed</li>
            </ul>
            <Map/>
         </div>
    )
}



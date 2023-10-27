import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function Footer(){
    const { isLoaded } : {isLoaded:boolean} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', 
    });

    return (
        <div>
            <div>
                <ul>
                <li>Monday 9AM-6PM</li>
                <li>Tuesday 9AM-6PM</li>
                <li>Wednesday 9AM-6PM</li>
                <li>Thursday 9AM-6PM</li>
                <li>Friday 9AM-6PM</li>
                <li>Saturday 9AM-4PM</li>
                </ul>
                <div id="map"></div>

            </div>
         </div>
    )
}

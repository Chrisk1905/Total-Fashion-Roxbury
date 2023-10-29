'use client';

import { useMemo } from "react"

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function Footer(){

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
            </div>
            <Map/>
         </div>
    )
}


function Map(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })    

    if(!isLoaded){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <GoogleMap 
            zoom={10}
            center={{ lat: 44, lng: -80}}
            mapContainerClassName="map-container"
        >

        </GoogleMap>
    )
}
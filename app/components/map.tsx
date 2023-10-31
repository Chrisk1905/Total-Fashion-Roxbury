'use client';

import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function Map(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })    
    const center = useMemo(() => ({lat: 44, lng: -80}), [])
    if(!isLoaded){
        return (
            <div>Loading...</div>
        )
    }

    return ( 
        <GoogleMap 
            zoom={15}
            center={{ lat: 47.51759338378906, lng: -122.35620880126953}}
            mapContainerClassName="map-container"
            >
            <Marker position={{ lat: 47.51759338378906, lng: -122.35620880126953}}> </Marker>
        </GoogleMap>
        
    )
}
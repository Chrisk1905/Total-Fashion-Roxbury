'use client';
import styles from './page.module.css'

import { useState } from 'react';
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useDirectionsService} from '@vis.gl/react-google-maps';

export default function TF_Map() {
  const position = { lat:47.51751829160094, lng:-122.35623009473451}
  const [open, setOpen] = useState(false);
  const directions_url = "https://www.google.com/maps/dir//Total+Fashion,+1618+SW+Roxbury+St,+Seattle,+WA+98106/@47.5683044,-122.4074905,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x549043df9f1b34ad:0x3a3f349d428493f0!2m2!1d-122.3562334!2d47.5175089!3e0?entry=ttu"
  return(
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <div className={styles.map_container}>
        <Map zoom={15} center={position} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} > 
          <button className={styles.directions}> Directions </button>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin></Pin>
          </AdvancedMarker>
            {open && <InfoWindow position={position} onCloseClick = {() => setOpen(false)}>
              <p>
                <a href={directions_url}>
                  Directions 
                </a> 
              </p>
            </InfoWindow>}
        </Map>
      </div>
    </APIProvider>
  )
}

'use client';
import styles from './page.module.css'

import { useState } from 'react';
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';

export default function TF_Map() {
  const position = { lat:47.51751829160094, lng:-122.35623009473451}
  const [open, setOpen] = useState(false);

  return(
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <div className={styles.map_container}>
        <Map zoom={16} center={position} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} > 
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin></Pin>
          </AdvancedMarker>
            {open && <InfoWindow position={position} onCloseClick = {() => setOpen(false)}>
              <p>Total Fashion </p>
            </InfoWindow>}
        </Map>
      </div>
    </APIProvider>
  )
}
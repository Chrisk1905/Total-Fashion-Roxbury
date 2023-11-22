'use client';
import styles from './page.module.css'

import { useState } from 'react';
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';

export default function TF_Map() {
  const position = { lat:47.51759338378906, lng: -122.35620880126953 }

  return(
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <div className={styles.map_container}>
        <Map zoom={13.5} center={position}>

        </Map>
      </div>
    </APIProvider>
  )
}
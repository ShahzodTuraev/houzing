
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import React from 'react'

export const Googlemaps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDRX0D21tjCpNmpABQp8bnfNyA99pscQrM',
    });
    if (!isLoaded) return <div>Loading...</div>;
  return <Map /> 
}
function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }


export default Googlemaps;

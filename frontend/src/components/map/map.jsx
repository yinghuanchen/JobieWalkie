import React from 'react';
import {
    GoogleMap, 
    useLoadScript, 
    Marker, 
    InfoWindow, 
} from '@react-google-maps/api';
import mapStyles from "./mapStyle";
const libraries  = ["places"];
const mapContainerStyle = {
    width: '400px',
    height: '400px'
};
const center = {
  lat: 37.76,
  lng: -122.44,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    //zoomControl: true,
}
const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyBMhBKWkTQc-kmQolE3en1V1Fm0Np4PJOg",
      libraries,
    });

    if (!isLoaded) return null; 

    return (
      <div className="map-container">
        <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={9}
            center={center}
            options={options}
        >
           {/* <Marker position={lat: marker.lat, lng: marker.lng}/> */}
        </GoogleMap>
      </div>
    );
};

export default Map;
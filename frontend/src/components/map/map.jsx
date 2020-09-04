import React, {useState, useEffect, Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {connect} from 'react-redux';
import mapStyle from './mapStyle.js';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"; 

const containerStyle = {
  width: "600px",
  height: "600px",
};


    // const {
    //   ready,
    //   value,
    //   suggestions: { status, data },
    //   setValue,
    //   clearSuggestions,
    // } = usePlacesAutocomplete({
    //   requestOptions: {
    //     location: { lat: () => 37.7758, lng: () => -122.435 },
    //     radius: 200 * 1000,
    //   },
    // });

    // const handleSelect = async (address) => {
    //   setValue(address, false);
    //   clearSuggestions();
    //   try {
    //     const results = await getGeocode({ address });
    //     const { lat, lng } = await getLatLng(results[0]);
    //     const ans = { lat: lat, lng: lng };
    //     return ans;
    //   } catch (error) {
    //     console.log("Error: ", error);
    //     return null;
    //   }
    // };



const  MapContainer  = (props) =>  {
    const [lat, Setlat]  = useState(null);
    const [lng, Setlng]  = useState(null);

    const handleGeocode = (address) => {
      switch (address) {
        case "San Jose, CA":
          return { lat: 37.33, lng: -121.89 };
        case "Santa Clara, CA":
          return { lat: 37.35, lng: -121.96 };
        case "Santa Clara County, CA":
         return { lat: 37.354, lng: -121.955 };
        case "Sunnyvale, CA":
          return { lat: 37.36, lng: -122.03 };
        case "Cupertino, CA":
          return { lat: 37.32, lng: -122.03 };
        case "Redwood City, CA":
          return { lat: 37.49, lng: -122.236 };
        case "San Francisco Bay Area":
          return { lat: 37.77, lng: -122.43 };
        case "Mountain View, CA":
          return { lat: 37.386051, lng: -122.083855 };
        case "Campbell, CA":
          return { lat: 37.287, lng: -121.949 };
        case "Palo Alto, CA":
          return { lat: 37.4683, lng: -122.143 };
        case "San Mateo, CA":
          return { lat: 37.554, lng: -122.313 };
        case "Pleasanton, CA":
          return { lat: 37.639, lng: -121.87 };
        case "Livermore, CA":
          return { lat: 37.6818, lng: -121.768 };
        case "Los Altos, CA":
          return { lat: 37.379, lng: -122.137 };
        default:
          return null;
      }
    }

    useEffect(() => {
      let ans = handleGeocode(props.place);
      console.log(ans);
      if (ans) {
        Setlat(ans.lat);
        Setlng(ans.lng);
      }
    }, [props.place]);


    const marker =
      lat && lng ? (
        <Marker
          position={{ lat: lat, lng: lng }}
          icon={{
            url:
              "https://i.pinimg.com/originals/25/62/aa/2562aacd1a4c2af60cce9629b1e05cf2.png",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      ) : null;

    return (
      <Map
        google={props.google}
        zoom={10}
        containerStyle={containerStyle}
        //styles={mapStyle}
        disableDefaultUI={true}
        center={{
          lat: 37.46,
          lng: -122.1,
        }}
        styles={mapStyle}
      >
        {marker}
      </Map>
    );
}

const mSTP = (state) => ({
  place: state.place,
});

export default connect(mSTP)(GoogleApiWrapper({
  apiKey: "AIzaSyBMhBKWkTQc-kmQolE3en1V1Fm0Np4PJOg",
})(MapContainer)); 

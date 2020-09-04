import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {connect} from 'react-redux';
import mapStyle from './mapStyle.js';


const containerStyle = {
  width: "600px",
  height: "600px",
};

export class MapContainer extends Component {

  // componentDidUpdate(prevProps) {
  // }
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        containerStyle={containerStyle}
        //styles={mapStyle}
        disableDefaultUI={true}
        center={{
          lat: 37.7758,
          lng: -122.435,
        }}
        styles={mapStyle}
      />
    );
  }
}

const mSTP = (state) => ({
  test: "testing"
})

export default connect(mSTP)(GoogleApiWrapper({
  apiKey: "AIzaSyBMhBKWkTQc-kmQolE3en1V1Fm0Np4PJOg",
})(MapContainer)); 

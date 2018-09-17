import React, { Component } from 'react';
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader  from "react-google-maps-loader"

class GoogleMap extends Component {

  render() {
    return (
      <div className="map">
        <ReactGoogleMapLoader
          params={{
              key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
              libraries: "places,geometry",
          }}
          render={googleMaps =>
            googleMaps && (
              <div style={{height: "200px", width: "300px"}}>
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{lat: this.props.lat, lng: this.props.lon}}
                  zoom={12}
                />
              </div>
            )
          }
        />  
      </div>
    );
  }
}

export default GoogleMap;

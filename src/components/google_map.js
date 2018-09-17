import React, { Component } from 'react';
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader  from "react-google-maps-loader"

class GoogleMap extends Component {
  
  // componentDidMount () {
  //   new google.maps.Map(this.refs.map, {
  //     zoom: 12,
  //     center: {
  //       lat: this.props.lat,
  //       lon: this.props.lon
  //     }
  //   });
  // }

  render() {
    return (
      // this.refs.map
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
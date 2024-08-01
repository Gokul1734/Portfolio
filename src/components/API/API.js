import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import { render } from "@testing-library/react";

export class MapContainer extends Component {
  render() {
    return (
      <div className="">
        <Map
          ContainerStyle={{
            width: "50%",
            height: "100%",
          }}
          zoom={16}
          initialCenter={{
            lat: 13.04287,
            lng: 80.24165,
          }}
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Chennai</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAsMSejcVXWugZaeZJT_kgmvQvcs-PXOBg",
})(MapContainer);

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAsMSejcVXWugZaeZJT_kgmvQvcs-PXOBg",
// });

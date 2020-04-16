import React, { Component } from 'react';
import { Map, Marker,InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 43.747470,
         lng: -79.602970
        }}
      >
          <Marker onClick={()=>{
            window.location.href="https://www.google.com/search?q=9+helmsdale+crescent&rlz=1C1CHBD_enCA849CA849&oq=9+helms&aqs=chrome.1.69i57j35i39j0l6.5324j0j7&sourceid=chrome&ie=UTF-8"
          }}
          name={'Dare and Defy'}
        />
        <InfoWindow><div>
            <h4>Dare and Defy</h4>
          </div></InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJt2jpZ-01wFmJ4HY8iunnSJKH3aXD4qc'
})(MapContainer);
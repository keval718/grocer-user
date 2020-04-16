import React, { Component, useState } from 'react'
import { GoogleMapLoader, GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow  } from 'react-google-maps'
import {Link} from 'react-router-dom';


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStore: ''
        };
    }

   

    
    render() {

        const mapContainer = <div style={{ height: '100%', width: '100%' }}></div>

       const onMarkerClick = (e) => {
           
           console.log("Hi");
       }
       

        const markers = this.props.markers.map((venue, i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }
            const ref = React.createRef();
            const handleClick = () =>
              ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
              
            return (
                <div>
                    <Marker key={i} {...marker} onClick={() => {
                    //   handleClick();
                      onMarkerClick();
                this.setState({ selectedStore: venue.location }) 
                console.log(this.state.selectedStore);    
            }} > </Marker>
           
            <div ref={ref} >
                    <div  style={{ backgroundColor: 'lightpink' , marginTop: '2px' }}>
                        {venue.name}
                        <br></br>
                        {venue.location.formattedAddress}

                    </div>
                </div>
                
            </div>)
        })

        const MapL = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={this.props.center}>
                 <div  style={{ backgroundColor: 'lightblue' , marginTop: '2px' }}>
                        {this.state.selectedStore.formattedAddress}
                        <div className="proceed">
                            <Link to={{
                                pathname: '/Home'
                            }}>Shop Now</Link>     
                        </div>
                        </div>
                {markers}  
                {/* {list} */} 
            </GoogleMap>
        ))

        return (
            
            <MapL
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJt2jpZ-01wFmJ4HY8iunnSJKH3aXD4qc&libraries=places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={mapContainer}
                mapElement={<div style={{ height: `100%` }} />}
            />
            
            
        )
    }
}

export default Map


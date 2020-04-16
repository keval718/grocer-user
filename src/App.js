import React, { Component } from 'react';
import './App.css';
import TopNav from './Nav';

import AddToCart from './components/AddToCart';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
 import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/login';
import Map from './Map';
import Home from './Home';
import superagent from 'superagent';
import Cart from './Cart';
class App extends Component {

  constructor() {
    super()
    this.state = {
      currentLocation: {
        lat: 0,
        lng: 0
      },
      venues: []
    }
  }

  componentDidMount() {

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
      //  console.log(pos.coords);
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        })
        console.log(this.state.currentLocation.lat);
        const url = "https://api.foursquare.com/v2/venues/search?v=20140806&ll=" + this.state.currentLocation.lat + "," + this.state.currentLocation.lng + "&categoryId=56aa371be4b08b9a8d573550&client_id=CFERCZSSMQJHIZUKNVAS0PMLTVDOWUGWMEE2OFYBZRFVXDFT&client_secret=OUAHA4JWGB4SY4FG1O1GQXEMDVBXQKFM0ZDUEHB1FKWSHR04";
        superagent
          .get(url)
          .query(null)
          .set('Accept', 'text/json')
          .end((error, response) => {
            const venues = response.body.response.venues
          //  console.log(JSON.stringify(venues))
            this.setState({
              venues: venues
            })
          })
      })
    }


   
  }
  render() {
    const MAPDISPLAY = () => (
      <div style={{ width: '100%', height: 600, background: 'red', display: 'inline-flex' }}>
        <Map center={this.state.currentLocation} markers={this.state.venues} />
      </div>
    )
    return (
      <Router>

        <TopNav/>
        
      <div className="App">
          
          {/* <Route path="/Map" component={TopNav}></Route> */}
          {/* <Route path="/Home" component={TopNav}></Route> */}
          <Route path="/Home" component={Home}></Route>
          <Route path="/Map" component={MAPDISPLAY} />
          
          <Route path="/addToCart" component={Cart}></Route>
          <Route path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          </div>

          <Footer/>
          
        </Router>
        
    
    );
  }
}

export default App;

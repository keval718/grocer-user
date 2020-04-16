import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (


      <div class="header" >
  <a href="#default" class="logo"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/express/seo_page/products-97886c1d28d0bbf7fd42fbbfd8a2114b60f35500a4c7c6f12a88f52acc5f37a6.png" width="50" height="50"></img></a>
  <div className="space"></div>
  <div class="right">
    
      <Link to="/Home">Home</Link>
      <Link to="/addToCart">Cart</Link>
      <Link to="/">About US</Link>
      <Link to="/">Contact US</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
     
      </div>
    
  </div>

     
    );
  }
}

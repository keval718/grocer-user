import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import '../../App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Footer = (props) => {
    
    return (
        
            <div class="header" style={{backgroundColor: 'black'}}>
            <Container>
  <Row>
    <Col sm={6}><SocialIcon network="twitter" bgColor="#ff5a01" /><SocialIcon network="facebook" bgColor="#ff5a01" /><SocialIcon network="linkedin" bgColor="#ff5a01" /><SocialIcon network="pinterest" bgColor="#ff5a01" /></Col>
    
         <Col sm={6}>
    <div class="right"> 
      <Link to="/Home">Home</Link>
      <Link to="/addToCart"><ShoppingCartIcon></ShoppingCartIcon></Link>
      <Link to="/AboutUs">About US</Link>
      <Link to="/ContactUs">Contact Us</Link>
      <Link to="/Login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
    </Col>
  </Row>
</Container>
        </div>
    );
    
}

export default Footer;
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = (props) => {
    
    return (
        
            <div class="header" style={{backgroundColor: 'black'}}>
            <Container>
  <Row>
    <Col sm={8}><SocialIcon network="twitter" bgColor="#ff5a01" /><SocialIcon network="facebook" bgColor="#ff5a01" /><SocialIcon network="linkedin" bgColor="#ff5a01" /><SocialIcon network="pinterest" bgColor="#ff5a01" /></Col>
    
         <Col sm={4}>
    <div class="right"> <Link to="/Home">Contact Us</Link>
      <Link to="/">Help</Link>
      <Link to="/">About US</Link>
      </div>
    </Col>
  </Row>
</Container>
        </div>
    );
    
}

export default Footer;
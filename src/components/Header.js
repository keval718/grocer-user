import React from 'react';
import DD from './DD.jpg';
import { render } from 'react-dom';
// import  './App.css';

import{BrowserRouter,Router,Link, Route,Switch} from 'react-router-dom';

const Header = (props) => {
    
    return (
        <div>
        
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark  justify-content-between navbar-custom">
            
        <a className="navbar-brand flex-row" href="#"> <img src={DD} alt="DD" className="navbar-brand" width="90" height="120" /></a> 

            <div class="flex-column">
            
                <ul className="navbar-nav mb-2 ">
                    <li className="nav-item active flex-row">
                        <a className="nav-link py-1 pr-3 h1" href="#">Scrapper</a>
                    </li>
                    <div className="border border-dark border-3 h-50 textcolor active">
                        <li className="nav-item nav-link">
                            <span className="nav-item py-1 pr-3">
                                <i className="fa fa-phone"></i>
                                416.919.6817
                            </span>
                        </li>
                    </div>
                    <li>
                    <button className="navbar-toggler ml-auto float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </li>
                </ul>
                
                   
            <div className="collapse navbar-collapse flex-grow-0 float-right" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2  inside">
                    <li className="nav-item active lis">
                        <Link className="nav-link l float-right" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link float-right" to="/about">About us</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link float-right" to="/contact">Contact us</Link>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
    
        </div>
    );
    
}

export default Header;
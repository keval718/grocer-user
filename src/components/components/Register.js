import React, { Fragment, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

export default class Register extends Component {

    constructor(){
        super();
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangePostal_code=this.onChangePostal_code.bind(this);
        this.onChangeStreet_address=this.onChangeStreet_address.bind(this);
        this.onChangeProvince=this.onChangeProvince.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.state={
            name:"",
            email:"",
            password:"",
            postal_code:"",
            street_address:"",
            province:"",
            country:"",
            phone:""
        }
 
  }
  onChangeName(e){
      this.setState({
          name:e.target.value
      })
  }
  onChangeEmail(e){
    this.setState({
        email:e.target.value
    })
}
onChangePassword(e){
    this.setState({
        password:e.target.value
    })
}
onChangeStreet_address(e){
    this.setState({
        street_address:e.target.value
    })
}
onChangePostal_code(e){
    this.setState({
        postal_code:e.target.value
    })
}
onChangeProvince(e){
    this.setState({
        province:e.target.value
    })
}
onChangeCountry(e){
    this.setState({
        country:e.target.value
    })
}
onChangePhone(e){
    this.setState({
        phone:e.target.value
    })
}

  
  
  


   onSubmit (e){
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      postal_code:this.state.postal_code,
      street_address:this.state.street_address,
      province:this.state.province,
      country:this.state.country,
      phone:this.state.phone
    };

    axios
      .post('https://grocer-server.herokuapp.com/api/users/adduser', data, config)
      .then(response => {
        let decodeddata = decode(response.data.token);
        console.log(decodeddata);
        sessionStorage.setItem('token', response.data.token);
        window.location="/login"
      })
      .catch(error => {
        console.log('error ', error);
      });
  };
  render(){
  return (
  

<div class="form-style-10">
              
              <h1>Sign Up</h1>
              <h3><b><p>Create Your Account</p></b></h3>
    <form  onSubmit={this.onSubmit}>
            <div class="section"></div>
          <div class="inner-wrap">
              <label>Name <input type="text" name="field1" placeholder='Name' value={this.state.name}
                onChange={this.onChangeName}/></label>
              <label>Email Address <input type="email"  placeholder='Email Address' name="field2" value={this.state.email}
                onChange={this.onChangeEmail}/></label>
                <label>Password <input type="password"  placeholder='Password' name="field3" value={this.state.password}
                onChange={this.onChangePassword}/></label>
                <label>Postal Code <input type="text"  placeholder='Postal Code' name="field4" value={this.state.postal_code}
                onChange={this.onChangePostal_code}/></label>
                 <label>Street Address <input type="text"  placeholder='Street Address' name="field5" value={this.state.street_address}
                onChange={this.onChangeStreet_address}/></label>
                 <label>Province <input type="text"  placeholder='Province' name="field7" value={this.state.province}
                onChange={this.onChangeProvince}/></label>
                 <label>Country <input type="text"  placeholder='Country' name="field8" value={this.state.country}
                onChange={this.onChangeCountry}/></label>
                  <label>Phone Number <input type="text"  placeholder='Phone Number' name="field9" value={this.state.phone}
                onChange={this.onChangePhone}/></label>
                <p >Already Have An Account?</p><Link to="/Login">  Click Here</Link>
        </div>

        <div class="button-section">
     <input type="submit" name="Log In" value="Register" />
    </div>
  </form>
  </div>

  );
  }
};



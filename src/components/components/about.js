import React from 'react';
//import img from '../image/aboutimg.jpg';
import Raj from '../../image/Raj.jpg';
import Keval from '../../image/Keval.jpg';
import Zenil from '../../image/Zenil.jpg';
import Harsh from '../../image/Harsh.jpg';


function About() {
  return (
    <div>
      <div className="container-fluid w-70 mt-2">
        <img src="https://d2guulkeunn7d8.cloudfront.net/assets/express/seo_page/products-97886c1d28d0bbf7fd42fbbfd8a2114b60f35500a4c7c6f12a88f52acc5f37a6.png" alt="Dare&Defy Logo" className="navbar-brand"  width="180" height="230" />
        <div className=" row col-10">
          <div className="col-3 text-right">
          
          </div>
              <h4 className="text-lg w-75 ">
              <p>Grocers is Canada's largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats – we have it all.
Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. </p>
               <p style={{color:"red"}}>Why should I use Grocers?</p>
<p>Grocers allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking, standing in long queues and carrying heavy bags – get everything you need, when you need. Food shopping online is now easy as every product on your monthly shopping list, is now available online at Grocers, Canada's best online grocery store.</p>
              </h4>
        </div> 
        <p>&nbsp;</p>

        <div className="d-flex row col-12">
          <div className="col-12">
            <h3 className="mx-auto text-lg-center w-75 text-info">
              Designed and Developed by: 
            </h3>
          </div>
        </div>
 
        <div className="row col-12">
          <div className="col-6">
            <h3 className="text-lg-right">
              <img src={Harsh} alt="Developer Harsh Thakkar" className="rounded-circle"  width="100" height="100" />  
            </h3>
          </div>
          <div className="col-6">
            <h3 className="text-lg-left text-info mt-4">
              <a href="https://www.linkedin.com/in/harsh15thakkar/" rel="external" className="text-success">Harsh Thakkar</a> <br></br>
            </h3>
          </div>
        </div>

        <div className="row col-12">
          <div className="col-6">
            <h3 className="text-lg-right">
            <img src={Keval} alt="Developer Keval" className="rounded-circle"  width="100" height="100" />  
            </h3>
          </div>
          <div className="col-6">
            <h3 className="text-lg-left text-info mt-4">
              <a href="https://www.linkedin.com/in/keval-shah-67b74616b/" rel="external" className="text-success">Keval Shah</a> <br></br>
            </h3>
          </div>
        </div>

        <div className="row col-12">
          <div className="col-6">
            <h3 className="text-lg-right">
              <img src={Raj} alt="Developer Raj" className="rounded-circle"  width="100" height="100" /> 
            </h3>
          </div>
          <div className="col-6">
            <h3 className="text-lg-left text-info mt-4">
              <a href="https://www.linkedin.com/in/raj-thakor-73a149129/" rel="external" className="text-success">Raj Thakor</a> <br></br>
            </h3>
          </div>
        </div>

        <div className="row col-12">
          <div className="col-6">
            <h3 className="text-lg-right">
              <img src={Zenil} alt="Developer Zenil" className="rounded-circle"  width="100" height="100" />  
            </h3>
          </div>
          <div className="col-6">
            <h3 className="text-lg-left text-info mt-4">
              <a href="https://www.linkedin.com/in/zenilsoni/" rel="external" className="text-success">Preksha Patel</a> <br></br>
            </h3>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default About;
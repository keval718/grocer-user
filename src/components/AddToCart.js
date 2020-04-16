import React from 'react';
export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }
  render(){
    // const { product } = this.props;
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <h4 className="card-title">"Product name"</h4>
          <h5 className="card-text"><small>price: </small></h5>
          <span className="card-text text-success">
              <small>Quantity: </small></span>
          <button className="btn btn-sm btn-warning float-right" 
              >Remove from cart</button>
        </div>
      </div>
     )
  }
}
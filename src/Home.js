import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider, ReactReduxContext } from 'react-redux';
import './App.css';
import { addToCart } from './components/actions/cartActions';
import axios from 'axios';
import AddCircleIcon from '@material-ui/icons/AddCircle';


var i = 0;
 class Home extends Component{
     constructor(){
         super();
        this.state={
            items:[],
            quantity: i
        }
     }

    componentDidMount(){
    axios.get('http://grocer-server.herokuapp.com/api/products/getAllProducts').then(res=>{

     if(res.data.length>0){
       this.setState({
         items:res.data
       })
     }
    })
    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
        i++;
        console.log(id+"this is id");
        this.setState({
            quantity:i
        })
    }

    render(){
        let itemList = this.state.items.map(item=>{
            return(
                <div className="card" key={item.id} style={{width:200}}>
                        <div className="card-image">
                            <img src={item.img}/>
                            {/* <span className="card-title">{item.title}</span> */}
                            <span to="/" className="button btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><AddCircleIcon style={{ fontSize: 40 }}>ADD</AddCircleIcon></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                           
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                Number Of Items Added: {this.state.quantity}
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
     
    }
    
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
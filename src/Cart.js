import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './components/actions/cartActions'
import Receipe from './Receipe';
import './App.css';
import {Media} from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
class Cart extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
            console.log(this.props.items + "bn")   

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <div key={item.id}>
                            
                        <Media >
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={item.img}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                               <h3> {item.title}</h3>
                                <p>
                                    {item.desc}
                                </p>
                                <b>Quantity: {item.quantity}</b>
                                <div className="add-remove">
                                    <Link to="/addToCart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}><AddCircleIcon style={{ fontSize: 40 }}>ADD</AddCircleIcon></i></Link>
                                    <Link to="/addToCart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}><IndeterminateCheckBoxIcon style={{ fontSize: 40 }}></IndeterminateCheckBoxIcon></i></Link>
        
                               <DeleteIcon style={{ fontSize: 40 }} onClick={() => { this.handleRemove(item.id) }}></DeleteIcon>
                                </div>
                            </Media.Body>
                        </Media>
                       
 
                               </div>              
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
             
                    {/* <ul className="collection" style={{display:'flex'}}>
                        {addedItems}
                    </ul> */}
                    {addedItems}
                </div>  
                <Receipe/>
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
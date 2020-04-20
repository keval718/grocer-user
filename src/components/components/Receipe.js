import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
//import { addShipping } from './actions/cartActions'
class Receipe extends Component{
    constructor(){
        super();
        this.state={
            products:[],
            storeid:"",
            email:""
        }

    }

   componentDidMount()
   {
       
    this.setState({
        email:sessionStorage.getItem('email')
    })
       console.log(sessionStorage.getItem("email"));
   }
    
    // componentWillUnmount() {
    //      if(this.refs.shipping.checked)
    //           this.props.substractShipping()   
    // }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    AddCart = () => {
        if(this.state.email==null)
        {
            window.confirm("Please Login In First");
            window.location="/Login"
        }
       
       
        const add={
            product: this.props.addedItems,
            fk_user_id:this.state.email,
            total:this.props.total
            
        }
        const email={
            email:this.state.email
        }

        console.log(add);
        axios.post("https://grocer-server.herokuapp.com/api/orders",add)
        .then(res=>{
            console.log(res.data);
        })
       
        axios.post("http://localhost:5000/api/mail/sendEmail",email).then(res=>{
            window.confirm("Your Order is Placed and check your mail and show that mail to counter")
            window.location="/Home"
        })
    }

       
    

   
    render(){
        console.log(this.props.total)
    
    
     console.log(this.props.addedItems+"added items")

        return(
            <div className="container">
                <div className="collection">
                
                        
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={this.AddCart}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        name:state.name
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Receipe)
/* import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'*/
import { ADD_TO_CART ,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/action-types/cart-actions'
import axios from 'axios';



const initState = {
    items: [
        // {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:'https://s.cornershopapp.com/product-images/588153.jpg?versionId=p2HT2rQVOfyyJbiLA5rGSAKYUVXgn_lb'},
        // {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: 'https://s.cornershopapp.com/product-images/588065.jpg?versionId=pTdkbSbMnvmrvydCGoKC_T0z3hU226x8'},
        // {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: 'https://s.cornershopapp.com/product-images/588045.jpg?versionId=cqzf5zDvWM1k6vTwUJMfq7PdtLsnfJNj'}
    ],
    addedItems:[],
    total: 0

}

axios.get('http://grocer-server.herokuapp.com/api/products/getAllProducts').then(res=>{

    initState.items = res.data
    console.log(initState.items[0] + "kjbk")
     
    })


const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
       // console.log("HArsh" + state.items + action.id + state.items);
        let addedItem = state.items.find(item=> item.id === action.id)
        console.log(addedItem);
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}
//INSIDE CART COMPONENT
if(action.type=== ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUB_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}
return state

}
export default cartReducer;
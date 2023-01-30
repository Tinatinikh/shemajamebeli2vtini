import { useEffect, useReducer, useRef, useState } from "react";
import {  useQuery,  } from "react-query";
import apiRequests from "./apiRequests" ;
import userReducer from "./hooks/user.reducer";


export function Cart (){
    const [products, dispatch] = useReducer(userReducer, [])
   
    const {data} = useQuery("products", () => apiRequests('GET', "/products"))

    useEffect(() =>{
        if(data){
            dispatch({type : "set_users", data})
        }
    },[data]) 

 

   
    function removeItem(itemId){
        dispatch({type : "remove_user", payload: itemId})
    }

 

    return<div  className="products">
      
                {
                 products.map(item =>( 
                    <li key={item.id}  > 
                    {item.image + " " +  item.title + " " + item.price} 
                    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                    <button onClick={() => dispatch({type: 'increment'})}>+</button>
                    <button onClick={() => removeItem(item.id)}> Remove</button> 
                    </li>   
                ))
                }
           
            
    
         
    </div>

}
export default Cart;

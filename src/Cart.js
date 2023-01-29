import { useEffect, useReducer, useRef, useState } from "react";
import {  useQuery,  } from "react-query";
import apiRequests from "./apiRequests" ;
import userReducer from "./hooks/user.reducer";
import NavMenu from "./NavMenu";
import { Products } from "./product pages/Products";

export function Cart (){
    const [products, dispatch] = useReducer(userReducer, [])
    const [value, setValue] = useState('')
    const inputRef = useRef() 
    const {data} = useQuery("products", () => apiRequests('GET', "/products"))

    useEffect(() =>{
        if(data){
            dispatch({type : "set_users", data})
        }
    },[data]) 

    useEffect(() =>{
        inputRef.current.focus();
    }, [])

    function addProduct(e){
        e.preventDefault();
        const newUser = 
            {
                title: value,
                stock: 0
            }
        dispatch({type : "add_users", data:newUser})
        setValue("")

   
    }
    function removeItem(itemId){
        dispatch({type : "remove_user", payload: itemId})
    }

 

    return <NavMenu> <div  className="products">
      <ul> 
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
            </ul>
            
    
         
    </div>
    </NavMenu>

}
export default Cart;

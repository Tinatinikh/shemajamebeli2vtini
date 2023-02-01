import { useEffect, useReducer, useRef, useState } from "react";
import {  useQuery,  } from "react-query";
import apiRequests from "./apiRequests" ;
import userReducer from "./hooks/user.reducer";
import { useTranslation } from "react-i18next";


export function Cart (){
    const [products, dispatch] = useReducer(userReducer, [])
    const {data} = useQuery("products", () => apiRequests('GET', "/products"))
    const {t} = useTranslation();
    const [value, setValue] = useState('')



    function addProduct(e){
        e.preventDefault();
        const newproducts = 
            {
                title: value,
                stock: 0
            }
            dispatch({type : "add_products", data:newproducts})
            setValue("")

   
    }
 
    return<div  className="cart">


    <div className="lesftside">
        <nav className='head'>
            <li>{t('PRODUCTNAME')}</li>
            <li>{t('QUANTITY')}</li>
            <li>{t('PRICE')}</li>
            <li>{t('TOTAL')}</li>
          </nav>


        <div className="maincproducts">
        { 
                data.map(item => { if (addProduct)
                     return (
                    <div className="items" key={item.id} >
                     <div className="itemsp1">
                     <img  className="productpic" src={item.image}></img>
                     <p>{item.title}</p>
                     </div> 
                     <div className="itemsp2">
                    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                    <span>{products.count}</span>
                    <button onClick={() => dispatch({type: 'increment'})}>+</button>
                    </div> 
                    <div className="prices">
                     <h4>{item.price}</h4> 
                     <h4>{item.price}</h4>
                     </div>
                    
                    </div> 
                    
                      
                )})
                }
                 <div className="deletebutton">
                
                    <button  onClick={() => dispatch({type: 'reset'})}>{t(' Remove')}</button> 
                    </div>
           
       

        </div>

    </div>

    <div className="rightside">
        <h3> Cart TOTAL</h3>
        <div>
            <span>Total:</span>
            <br/>
            <br/>
            <span>Sub-Total:</span>
        
        </div>
        
        <div className="buybutton">
   <button className="buytext"> Buy </button>
        </div>
    </div>
      
      

            
    
         
    </div>

}
export default Cart;

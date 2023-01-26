import NavMenu from "../NavMenu";
import React from "react";




const produqtebi= [
    {"id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120}}
]

export function Product1 () {

    return (
        <NavMenu>
(
        <div className='container-products'>
             {
            produqtebi.map(item =>( 
                <div key={item.id}  className="div-items"> 
                   <img src={item.image}></img>
                   <h4>{item.title}</h4>
                   <p>{item.description}  </p> 
                   <h4>{item.price}</h4>          
           
                </div>   
            ))
            }
        </div>
       )
            
        </NavMenu>
     )
}
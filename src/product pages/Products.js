import { useQuery } from "react-query";
import { useEffect, useReducer, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiDetails from "./apiDetails";
import userReducer from "../hooks/user.reducer";


export function Products(){
    const param = useParams()
    const [products, dispatch] = useReducer(userReducer, [])
    const {data, isLoading} = useQuery(["product" , param.productId], () => apiDetails("GET",  param.productId))
    console.log(data);

    function addProduct(e){
      e.preventDefault();
      const newproducts = 
          {
              title: {data},
              stock: 0
          }
          dispatch({type : "add_products", data:newproducts})
         

 
  }
    if(isLoading){
      return <div> Load</div>
    }  return (
        
    <div className="productsinglepage">
      <div key={data.id}  className="div-items"> 
        <img  className="productpic" src={data.image}></img>
        <h4>{data.title}</h4>
        <p>{data.description}  </p> 
        <h4>{data.price}</h4> 
        <button className="productbutton" onClick={() => addProduct} >Buy</button>                    
           
      </div> 
    </div>
        )

}

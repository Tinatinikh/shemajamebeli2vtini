import { useEffect, useState } from "react";
import apiRequests from "./apiRequests"
import{useQuery} from "react-query";
import React from 'react';


export function Landing(){
    const [produqtebi, setProduqtebi] = useState([])

    const {data, isLoading} = useQuery("products", () => apiRequests('GET', "products")); 
    
    console.log(data);
    
    useEffect(() =>{
        if(data){
            setProduqtebi(data)
        }
    },[data])


    return <div >
        
       {isLoading ? <div>loader</div> : (
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
       )}
        
        
    </div>
}

export default Landing;


import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apiDetails from "./apiDetails";


export function Products(){
    const param = useParams()
    const {data, isLoading} = useQuery(["product" , param.productId], () => apiDetails("GET",  param.productId))
    console.log(data);


    if(isLoading){
      return <div> Load</div>
    }  return (
        
    <div className="productsinglepage">
      <div key={data.id}  className="div-items"> 
        <img  className="productpic" src={data.image}></img>
        <h4>{data.title}</h4>
        <p>{data.description}  </p> 
        <h4>{data.price}</h4> 
        <button className="productbutton" >Buy</button>                      
           
      </div> 
    </div>
        )

}

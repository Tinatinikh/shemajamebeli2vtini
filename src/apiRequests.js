import axios from "axios";

export default function apiRequests(method,endpoint, data,headers ={}){ 
    const defaultHEader = {
        Verified : "uniqueVerif" 
    }
    return axios({
        url:"https://fakestoreapi.com/"+ endpoint,
        method,
        data,
        headers : {... defaultHEader,...headers}

})
.then(response => response.data)
}
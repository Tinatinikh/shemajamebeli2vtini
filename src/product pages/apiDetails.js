import axios from "axios";

export default function apiDetail(method,endpoint) {
    return axios ({
        url: "https://fakestoreapi.com/products/" + endpoint,
        method
    })
    .then(response => response.data)
}
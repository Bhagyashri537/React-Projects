import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import CartContext from "../store/CartContext";

import { useContext } from "react";
import { Cart } from "../store/CartContext";


const ProductsList = [
  {
    id: "p1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:"Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = (props) => {
     const params = useParams()
    
   

   
    const product = Array.isArray(ProductsList) ? ProductsList.find((value) => value.id === params.id) : 0;
   

    return (
        <div>
         
          <img src={product.imageUrl} alt="pro_img"/>
         
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>

           
          
        </div>
    )
}
export default ProductDetail
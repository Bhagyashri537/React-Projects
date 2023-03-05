import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


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

const Product = (props) => {
  
  //  const id = 2
  // const navigate = useNavigate();
  // function goToProductDetails () {
  //   navigate("/product/" , {state : {id : id}})
    
  // }

  return (
    <>
      <ul className="grid grid-cols-2 place-content-center pl-56 pr-20">
       {ProductsList.map((products) => {
        return (
            <Link to={"/product/" + products.id}>
          <div > <ProductCard {...products} key={products.id}/></div>
              </Link>
        )
       })}
      </ul>
    </>
  );
};

export default Product;

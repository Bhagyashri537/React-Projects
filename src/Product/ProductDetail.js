import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CartContext from "../store/CartContext";

import { useContext } from "react";
import { Cart } from "../store/CartContext";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductsList = [
  {
    id: "p1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ProductReview: [

      { name: 'Neel', review: 'I recommend this product, It is actually nice'},

      { name: 'Pooja', review: 'ok, product it can be better'},

      { name: 'Nisha' ,  review: 'good in this price'},

      { name: 'Ram', review: 'worth it'},

  ]
  },

  {
    id: "p2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ProductReview: [

      { name: 'Neel', review: 'I recommend this product, It is actually nice'},

      { name: 'Divya', review: 'ok, product it can be better'},

      { name: 'Ravi' ,  review: 'good in this price, want to buy more in future'},

      { name: 'Ram', review: 'worth it'},

  ]
  },

  {
    id: "p3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ProductReview: [

      { name: 'Neel Nithin', review: 'I recommend this product, It is actually nice'},

      { name: 'Pratha', review: 'ok, product it can be better'},

      { name: 'Disha' ,  review: 'good in this price, want to buy more in future'},

      { name: 'Rameshwar', review: 'worth it, i will recommed this to everyone'},

  ]
  },

  {
    id: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ProductReview: [

      { name: 'Nitin', review: 'I recommend this product, It is actually nice'},
  
      { name: 'Pratha', review: 'ok, product it can be better'},
  
      { name: 'Disha' ,  review: 'good in this price, want to buy more in future'},
  
      { name: 'Rajat', review: 'worth it, i will recommed this to everyone'},
  
  ]
  },
 
];

const ProductDetail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  const product = Array.isArray(ProductsList)
    ? ProductsList.find((value) => value.id === params.id)
    : 0;

  return (
    
    <div className="p-5">
      <div className="border-2 border-blue-400">
      <div className="flex">
        <div className="p-10">
          <h2 className="text-2xl font-bold m-2">{product.title}</h2>
          <img
            className=" border-black border-solid "
            src={product.imageUrl}
            alt="pic"
          />
          <div className="flex">
            <h3 className="font-semibold p-4 ">Rs.{product.price}</h3>
            <div className="pt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={() => addItemHandler(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-bold m-2 rounded-md"> ProductReview</h2>
          {Object.values(product.ProductReview).map(item => (
            <li className="p-4 pt-8 bg-slate-100">{item.id} {item.name} : {item.review}</li>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default ProductDetail;

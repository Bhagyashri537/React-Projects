import React, {useState,createContext} from "react";
import ProductsList from "../Product/ProductCard";


export const Cart = React.createContext()
   

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        setCart([...cart, {...data, quantity:1}])
    }

    return (
        <Cart.Provider value={{cart,setCart,ProductsList,addToCart}}>
         {children}
        </Cart.Provider>
    )
}
export default CartContext
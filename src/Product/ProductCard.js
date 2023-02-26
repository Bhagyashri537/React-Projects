import { useState } from "react"
import { Cart } from "../store/CartContext"



const ProductCard = ({title,price,imageUrl}) => {
    
  const [addIte , setAddItem] = useState([])

  const addToCart = (item) =>{
    Cart.addItem()
    setAddItem(item)
  }
   
    return (
      <div>
        
        <div className="w-56 p-16 m-10 bg-gray-200 border-separate box-content shadow-slate-600 justify-between">
        <h2 className="text-2xl font-bold shadow-md p-2 m-2">{title}</h2>
        <img src={imageUrl} alt="pic"/>
        
        <h3>Rs.{price}</h3>
        <button className="p-1 m-1 bg-blue-400 rounded-md" onClick={() => addToCart(addIte)}>Add To Cart</button>
        </div>
        
      </div>
    )
}
export default ProductCard
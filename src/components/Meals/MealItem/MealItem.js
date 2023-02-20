import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartctx = useContext(CartContext)
  const price = `${parseInt(props.price).toFixed(2)}`
  
  const addToCartHandler = amount => {
    cartctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,

    })
  }
 
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.info}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <div>
        {/* {console.log(props)} */}
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};
export default MealItem;

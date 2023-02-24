import CartContext from "./CartContext";

const CartProvider = (props) => {
     
    cartctx = {
        items:[],
        totalAmount:0,
        // addItem:
        // removeItem:
    }

    return (
       <CartContext.Provider value={cartctx}>
        {props.children}
       </CartContext.Provider> 
    )
}
export default CartProvider;
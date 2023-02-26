
import CartItem from "./cartItem";

const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
]
const Cart = () => {

    
    return (
        <div>
            <ul>
                
                {cartElements.map((item) => {
                    return (
                        <CartItem {...item} key={item.id}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Cart;
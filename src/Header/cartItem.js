
const CartItem = ({title,price,imageUrl,quantity}) => {
    return (
      <div>
        <h2>{title}</h2>
        <div>
        <img className="w-36" src={imageUrl} alt="pic"/>
        
        <h3>Rs.{price}</h3>
        <h4>{quantity}</h4>
         
        </div>
        <button className="p-2 m-2 bg-orange-300 text-white rounded-md">Remove</button>
        
      </div>
    )
}
export default CartItem
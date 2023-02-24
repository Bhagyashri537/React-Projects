

const ProductCard = ({title,price,imageUrl}) => {
    return (
      <div>
        <h2 className="text-lg p-2 m-2">{title}</h2>
        <div className="w-56 p-2 m-2 shadow-lg bg-green-50 border-separate box-content">
        <img src={imageUrl} alt="pic"/>
        
        <h3>Rs.{price}</h3>
        <button>Add To Cart</button>
        </div>
        
      </div>
    )
}
export default ProductCard
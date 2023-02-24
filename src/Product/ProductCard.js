

const ProductCard = ({title,price,imageUrl}) => {
    return (
      <div>
        
        <div className="w-56 p-16 m-10 bg-gray-200 border-separate box-content shadow-slate-600 justify-between">
        <h2 className="text-2xl font-bold shadow-md p-2 m-2">{title}</h2>
        <img src={imageUrl} alt="pic"/>
        
        <h3>Rs.{price}</h3>
        <button className="p-1 m-1 bg-blue-400 rounded-md">Add To Cart</button>
        </div>
        
      </div>
    )
}
export default ProductCard


const ProductCard = ({title,price,imageUrl}) => {
    return (
      <div>
        
        <img src={imageUrl} alt="pic"/>
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    )
}
export default ProductCard
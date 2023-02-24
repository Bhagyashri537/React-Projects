

const ProductCard = ({title,price,imageUrl}) => {
    return (
      <div>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <img src={imageUrl} alt="pic"/>
      </div>
    )
}
export default ProductCard
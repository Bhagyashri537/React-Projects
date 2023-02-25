import ProductCard from "./ProductCard";

const productsList = [
  {
    id: "p1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:"Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = (props) => {
  console.log(Product)
  return (
    <>
      <ul className="flex flex-wrap">
       {productsList.map((products) => {
        return (
            <ProductCard {...products} id={products.id}/>
        )
       })}
      </ul>
    </>
  );
};

export default Product;

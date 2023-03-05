import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../store/CartContext";

const Header = (props) => {
  const cart = useContext(Cart);

  

  return (
    <div>
      
      <ul className="flex justify-end bg-black px-2 text-white p-4">
     
      
        <Link to="/home">
          <li className="px-2">HOME</li>
        </Link>
        <Link to="/">
          <li className="px-2">STORE</li>
        </Link>
        <Link to="/about">
          <li className="px-2">ABOUT</li>
        </Link>
        <Link to="/contact">
          <li className="px-2">CONTACT US</li>
        </Link>
        <Link to="/login">
          <li className="px-2">LOGIN</li>
        </Link>
      </ul>

      <div className="bg-slate-500 text-center p-4 shadow-gray-900 shadow-lg">
        <div>
          <Link to="/cart">
           <button variant="success">
        Cart
        <sup>{cart.length}</sup>
           </button>
          </Link>
        </div>
        <h1 className="text-7xl text-slate-50">The Generics</h1>
      </div>
    </div>
  );
};
export default Header;


import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../store/CartContext";

const Header = (props) => {
  
   const cart = useContext(Cart)
    
  return (
    <>
      <ul className="flex justify-between bg-black text-white p-4">
        <Link to="/home">
          <li>HOME</li>
        </Link>
        <Link to="/">
        <li>STORE</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT US</li>
        </Link>
      </ul>

      <div className="bg-slate-500 text-center p-4 shadow-gray-900 shadow-lg">
      <div>
        <Link to="/cart">
          <button>
            Cart - {cart.length} -items
            <sup>{cart.length}</sup>
            </button>
          </Link>
        </div>
        <h1 className="text-7xl text-slate-50">The Generics</h1>
      </div>
    </>
  );
};
export default Header;

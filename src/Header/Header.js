import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      
        <ul className="flex justify-around bg-black text-white p-2">
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>
          <Link to="/cart">
          <li>CART</li>
          </Link>
        </ul>

    <div className="bg-slate-500 text-center p-4 shadow-lg">
        <h1 className="text-7xl text-slate-50">The Generics</h1>
    </div>
     
    </>
  );
};
export default Header;

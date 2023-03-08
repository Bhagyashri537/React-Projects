import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const CartItem = ({ title, imageUrl, price }) => {
 
  const dispatch = useDispatch();
   const deleteCartItem = (id) => {
        dispatch(removeItem(id));

    }
  return (
    <div className="p-5">
      {/* <div className="border-2 border-blue-400"> */}
        <div className="flex justify-between">
          <div>
            <img
              className="h-12 border-black border-solid px-6 "
              src={imageUrl}
              alt="pic"
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold px-6 ">{title}</h2>
           
          </div>
          <div>
          <h3 className="font-semibold px-6 ">Rs.{price}</h3>
          </div>
          <div>
            <button className="bg-slate-400 rounded-lg px-6" onClick={() => deleteCartItem()}>remove</button>
          </div>
          
         
        </div>
      {/* </div> */}
    </div>
  );

  
            }

export default CartItem;

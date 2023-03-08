import { useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const [order, setOrder] = useState(false);
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const price = [];

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cart.length === 0 ? (
    <div>
      <h2>order something</h2>
    </div>
  ) : (
    <div>
      <div className="flex justify-between p-3">
        <h2 className="font-bold">Total No of Cart Items - {cart.length}</h2>
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      <div className="flex justify-between">
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="px-52 divide-y-4 divide-slate-400">
          {cart.length === 0 ? null : (
            <div>
              <h2>Cartitems : {cart.length} </h2>
              {cart.map((item) => {
                return (
                  <>
                    <div key={item.id}>
                      <h2 className="font-bold px-6 p-2">
                        {item.title} - Rs. {item.price}
                      </h2>
                    </div>
                    <h5 className="hidden">{price.push(item.price)}</h5>
                  </>
                );
              })}
            </div>
          )}

          <div className="flex font-bold pt-2 p-2 px-6">
            <h2>Total </h2>
            <h2>Price {price.reduce((sum, a) => sum + a, 0).toFixed(2)}</h2>
          </div>
          <>
            <div className="text-center p-2">
              <button
                className="bg-slate-400 rounded-lg p-2"
                onClick={() => setOrder(true)}
              >
                Order
              </button>
            </div>
            {order ? (
              <div>
                <h2>orderd succesfully</h2>
                <button onClick={() => setOrder(false)}>close</button>
              </div>
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
};
export default Cart;

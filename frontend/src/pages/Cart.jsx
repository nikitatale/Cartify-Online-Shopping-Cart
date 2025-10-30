import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-base sm:text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 sm:space-y-5">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow gap-4"
              >
               
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />

                
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">₹{item.price}</p>

                  
                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQty(item._id, item.qty - 1)}
                      className="px-2 bg-gray-200 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item._id, item.qty + 1)}
                      className="px-2 bg-gray-200 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

              
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 font-semibold hover:underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

    
          <div className="mt-6 p-4 border-t flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

        
          <button onClick={() => navigate("/checkout")} className="mt-4 cursor-pointer bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-900 w-full sm:w-auto">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}; 
 
export default Cart;

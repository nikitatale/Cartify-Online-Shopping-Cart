import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:px-20">

      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Checkout
      </h2>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

    
        <div className="bg-white shadow-md p-5 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Shipping Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" onChange={handleChange} placeholder="Full Name*" className="border p-2 rounded w-full" />
            <input name="phone" onChange={handleChange} placeholder="Phone Number*" className="border p-2 rounded w-full" />
            <input name="pincode" onChange={handleChange} placeholder="Pincode*" className="border p-2 rounded w-full" />
            <input name="city" onChange={handleChange} placeholder="City" className="border p-2 rounded w-full" />
          </div>

          <textarea
            name="address"
            onChange={handleChange}
            placeholder="Full Address*"
            className="border p-2 rounded w-full mt-4 min-h-[100px]"
          ></textarea>

          <input
            name="state"
            onChange={handleChange}
            placeholder="State"
            className="border p-2 rounded w-full mt-4"
          />
        </div>

      
        <div className="bg-white shadow-md p-5 sm:p-6 rounded-lg h-fit">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between border-b pb-2 text-sm sm:text-base">
                <span className="text-gray-700">{item.name} × {item.qty}</span>
                <span className="font-medium">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-bold mt-6 border-t pt-4">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() => navigate("/thank-you")}
            className="w-full mt-6 cursor-pointer bg-blue-700 hover:bg-blue-900 transition text-white py-2 rounded-md font-medium"
          >
            Confirm Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Navbar = () => {

  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
       <div onClick={() => navigate("/")} className='cursor-pointer'>
         <img src={assets.shopping_bag} alt="shopping logo" className='w-7'/>
         <h1 className='text-2xl font-bold italic text-blue-700'>Cartify</h1>
       </div>
       
       <ul className='sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to="/cart" className="flex flex-col items-center gap-1">
              {cartItems.length > 0 && (
              <span className='absolute top-5 right-2 lg:top-5 lg:right-30 w-5 text-center leading-5 bg-black text-white rounded-full text-[10px] font-bold'>
                {cartItems.length}
              </span>
            )}

            <img src={assets.shopping_cart} alt="cart" className='w-7 min-w-5'/>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

       </ul>
    </div>
  )
}

export default Navbar

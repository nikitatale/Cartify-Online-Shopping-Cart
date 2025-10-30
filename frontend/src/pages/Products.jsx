import React, { useContext, useState } from 'react'
import { products } from '../assets/assets'
import { CartContext } from '../context/CartContext'

const Products = () => {

  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(null); 

  const handleAdd = (item) => {
    addToCart(item);
    setAddedItem(item._id); 
    
    setTimeout(() => {
      setAddedItem(null); 
    }, 1500);
  };

  return (
    <div className="py-2 border-t">
      <div className='text-left py-6'>
        <h3 className='font-bold text-3xl leading-tight'>
          Discover Your Style - 
          <span className='font-medium text-[20px] text-gray-600'> Handpicked Products Just for You</span>
        </h3>
      </div> 

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
        {products.map((item) => (
          <div 
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-bold">₹{item.price}</span>

                <button 
                  onClick={() => handleAdd(item)}
                  className={`px-3 py-1 rounded-md text-sm transition-all duration-200 cursor-pointer
                    ${addedItem === item._id 
                      ? "bg-green-700 text-white" 
                      : "bg-blue-700 text-white hover:bg-blue-800"
                    }`}
                >
                  {addedItem === item._id ? "Added ✓" : "Add to Cart"}
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import { IoIosClose } from "react-icons/io";

const ShoppingCartItem = () => {
  return (
    <div className='flex items-center justify-between pb-5 border-b'>
              <img className='object-cover w-16 h-16 rounded' src="https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20241/7190391/v1/l_20241-s4iv47z8-cvl-100-81-90-189_a1.jpg" alt="Shirt" />
              <p className='text-sm font-medium text-gray-700'>M</p>
              <p className='text-sm font-medium text-gray-700'>Shirt</p>
              <p className='text-sm font-medium text-gray-700'>Male</p>
              <p className='text-sm font-bold text-gray-900'>$29.99</p>
              <IoIosClose className='text-xl font-bold duration-100 ease-in-out cursor-pointer hover:text-blue-500' />
            </div>
  )
}

export default ShoppingCartItem
import React, { useState } from 'react'

const FavoriteItem = ({item,index}) => {
    
    
  return (
  
            <div key={index}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <img
                src={`http://localhost:5000/${item.image.split(",")[0]}`}
                alt=""
                className='w-full h-64 object-contain'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{item.type}</h3>
                <p className='text-gray-600'>${item.price}</p>
                <button className='mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300'>
                  Remove from Favorites
                </button>
              </div>
            </div>
       
  )
}

export default FavoriteItem
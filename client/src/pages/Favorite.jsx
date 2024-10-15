import React from 'react';

const Favorite = () => {
  

    

  return (
    <div className='w-full h-[80vh] flex justify-center bg-gray-100'>
      <div className='w-[80%] h-full flex flex-col items-center'>
        <div className='text-3xl pt-10 pb-5'>
          <h2>Favorite Products</h2>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <img
                src=""
                alt=""
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>name</h3>
                <p className='text-gray-600'>$233</p>
                <button className='mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300'>
                  Remove from Favorites
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;

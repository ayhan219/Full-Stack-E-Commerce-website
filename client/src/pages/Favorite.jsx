import React from 'react'

const Favorite = () => {
  return (
    <div className='w-full h-[60vh] flex justify-center'>
        <div className='w-[80%] h-full flex justify-center '>
            {/* <div className='flex flex-col items-center gap-7'>
            <div className='w-32 h-32 mt-16'>
                <img className='w-full h-full object-cover' src="https://www.lcw.com/Resource/Images/FavoriYok.svg" alt="" />
            </div>
            <div className='text-[#193DB0] text-xl font-semibold'>
                <h2>You Don't Have a Favorite Product</h2>
            </div>
            <div className='text-[#555555] text-xl font-semibold'>
                <p>You have not added a product to your favorites, all you have to do is click on the small heart icon on the product images.</p>
            </div>
            </div> */}

            <div className='text-2xl pt-10'> 
                <h2>Favorite Products</h2>
            </div>
            
           
        </div>
    </div>
  )
}

export default Favorite
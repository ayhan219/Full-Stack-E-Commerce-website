import React, { useContext, useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'
import { UserContext } from '../UserContext/UserContext'

const Product = () => {

  const {products,setProducts} = useContext(UserContext);

  return (
    <div className='flex flex-wrap w-full gap-8 p-10 '>
        {
         products.length > 0 ?  products.map((item,index)=>(
          <Item item={item} key={index}/>
        )) : <div>
          <h2 className='flex justify-center w-full text-3xl font-bold text-black'>No Products!</h2>
          
        </div>
        }
        
        
       

        
    </div>
  )
}

export default Product
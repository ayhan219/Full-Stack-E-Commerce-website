import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'

const Product = () => {

  const [products,setProducts] = useState([]);
  
  const getProducts = async()=>{
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data)
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className='w-full p-10 flex gap-8 flex-wrap   '>
        {
          products.map((item,index)=>(
            <Item item={item} key={index}/>
          ))
        }
        
        
       

        
    </div>
  )
}

export default Product
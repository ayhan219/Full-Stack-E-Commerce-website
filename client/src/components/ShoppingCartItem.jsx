import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const ShoppingCartItem = ({ item, index }) => {
  const show = ()=>{
    console.log(item);
    
  }
  
  return (
    <div
      key={index}
      onClick={show}
      className="flex items-center justify-between pb-5 border-b"
    >
      <img
        className="object-cover w-16 h-16 rounded"
        src={`http://localhost:5000/${item.image.split(",")[0]}`}
        alt="Shirt"
      />
      <p className="text-sm font-medium text-gray-700">{item.size}</p>
      <p className="text-sm font-medium text-gray-700">{item.type}</p>
      <p className="text-sm font-medium text-gray-700">{item.forWho}</p>
      <p className="text-sm font-bold text-gray-900">${item.price}</p>
      <IoIosClose className="text-xl font-bold duration-100 ease-in-out cursor-pointer hover:text-blue-500" />
    </div>
  );
};

export default ShoppingCartItem;

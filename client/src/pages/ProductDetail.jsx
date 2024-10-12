import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { TbSTurnRight } from "react-icons/tb";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(""); 

  const handleClick = (size) => {
    setSelectedSize(size); 
  };
  return (
    <div className="w-full h-[160vh] flex justify-center">
      <div className="w-full h-full  flex shadow-xl">
        <div className="w-full  h-full p-5">
         <div className="w-full h-[45%] flex">
         <div className="w-full h-full ">
          <img className="w-full h-full object-cover" src="https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20232/6900619/v1/l_20232-w3ht91z8-vz8-97-78-94-188_a.jpg" alt="" />
         </div>
         <div className="w-full h-full ">
          <img className="w-full h-full object-cover" src="https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20232/6900619/v1/l_20232-w3ht91z8-vz8-97-78-94-188_a2.jpg" alt="" />
         </div>
         
         </div>
         <div className="w-full h-[45%] flex">
         <div className="w-full h-full ">
         <img className="w-full h-full object-cover" src="https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20232/6900619/v1/l_20232-w3ht91z8-vz8-97-78-94-188_a3.jpg" alt="" />
         </div>
         <div className="w-full h-full ">
         <img className="w-full h-full object-cover" src="https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20232/6900619/v1/l_20232-w3ht91z8-vz8-97-78-94-188_a4.jpg" alt="" />
         </div>
        
         </div>
        </div>
        <div className="w-[50%] h-full p-10">
          <div className="flex text-3xl">
            <h3>De Casual Slim T-Shirt <span>Men</span> </h3> 
          </div>
          <div className="pt-10">
          <div className="flex items-center  text-2xl">
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
       <div className="text-sm flex gap-3">
       <span className="pl-3  text-gray-600"> | </span>
      <div className="flex text-lg gap-1 cursor-pointer font-semibold hover:text-blue-600 ease-in-out duration-100">
      <span>25</span>
      <span>rating</span>
      </div>
       </div>
      </div>
      <div className="pt-20 text-3xl text-[#193DB0]">
        <h2>29.99$</h2>
      </div>
      <div className="pt-10 text-xl font-semibold">
        <h2>Size</h2>
        <div className="w-full h-auto pt-5 flex gap-3">
                {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <button
                    key={size}
                    
                    onClick={() => handleClick(size)}
                    className={`w-12 h-12 font-normal shadow-xl text-black hover:border-2 border-black ease-out duration-75 ${
                      selectedSize === size ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
      </div>
      <div className="w-full h-auto pt-20">
        <button className="w-full h-14 bg-blue-600 text-white text-xl rounded-sm font-semibold hover:bg-blue-500 ease-in-out duration-100 ">Add To Shopping Cart</button>
      </div>
      <div className="pt-16 text-xl">
        <h2>This item is shipped by De Suits dealers.</h2>
      </div>
      <div className="pt-10 flex text-xl items-center gap-3">
        <TbSTurnRight />
        <span>
        Return Within 120 Days</span>
      </div>

      <div className="pt-16 text-[#555555]">
        <h2 className="font-bold">Product Description</h2>
        <p>It stands out with its elasticated waist and adjustable drawstring design that provides a comfortable fit. It offers excellent functionality with its large cargo pockets that increase practical use. Elastic hem detail gives a modern and sporty look.</p>
      </div>

      <div className="pt-16 text-[#555555]">
        <h2 className="font-bold">Product Content and Features</h2>
        <p>It stands out with its elasticated waist and adjustable drawstring design that provides a comfortable fit. It offers excellent functionality with its large cargo pockets that increase practical use. Elastic hem detail gives a modern and sporty look.</p>
      </div>

      
     
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

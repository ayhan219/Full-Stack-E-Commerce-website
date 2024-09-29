import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Popular = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 268,
      behavior: "smooth",
    });
  };

  const scrollLeft = ()=>{
    scrollRef.current.scrollBy({
        left:-268,
        behavior:"smooth",
    })
  }
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="w-[65%] h-full relative">
        <div className="text-center text-4xl pt-20">
          <h2>Popular Categories</h2>
        </div>

        <div className="w-full h-56 mt-10 flex gap-3 overflow-x-hidden" ref={scrollRef}  style={{ scrollBehavior: "smooth" }}>
          <div className="flex gap-3 whitespace-nowrap ">
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>dress</h2>
            </div>
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>jeans</h2>
            </div>
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>pants</h2>
            </div>
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>jackets</h2>
            </div>
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>shirts</h2>
            </div>
            <div className="w-64 h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>shorts</h2>
            </div>
            
          </div>
        </div>
        <div onClick={scrollLeft} className="w-10 h-10 bg-black text-white font-thin text-xl items-center justify-center cursor-pointer flex top-52 -left-14 absolute ">
            <FaArrowLeft />
        </div>
        <div
          onClick={scrollRight}
          className="w-10 h-10 bg-black text-white font-thin text-xl items-center justify-center cursor-pointer flex top-52 -right-10 absolute"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Popular;

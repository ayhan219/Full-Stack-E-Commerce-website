import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Popular = () => {
  const scrollRef = useRef(null);

 
  const scrollDistance = window.innerWidth >= 768 ? 268 : 172; 

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="w-[65%] h-full relative">
        <div className="text-center text-4xl pt-20">
          <h2>Popular Categories</h2>
        </div>

        <div
          className="w-full h-72 mt-10 flex md:justify-normal  justify-center gap-3 overflow-y-hidden overflow-x-hidden"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-3 md:pr-0 whitespace-nowrap ">
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>dress</h2>
            </div>
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>jeans</h2>
            </div>
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>pants</h2>
            </div>
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>jackets</h2>
            </div>
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>shirts</h2>
            </div>
            <div className="w-36 h-20 md:w-64 md:h-32 hover:bg-[#22242A] ease-in-out duration-200 cursor-pointer text-xl md:text-3xl font-light flex items-center justify-center hover:text-white">
              <h2>shorts</h2>
            </div>
          </div>
        </div>
        <div
          onClick={scrollLeft}
          className="w-10 h-10 bg-black text-white font-thin text-xl items-center justify-center cursor-pointer hidden md:flex top-52 -left-14 absolute "
        >
          <FaArrowLeft />
        </div>
        <div
          onClick={scrollRight}
          className="w-10 h-10 bg-black text-white font-thin text-xl items-center justify-center cursor-pointer hidden md:flex top-52 -right-10 absolute"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Popular;

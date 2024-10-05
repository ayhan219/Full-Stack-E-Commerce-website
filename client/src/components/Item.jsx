import React from "react";
import { IoIosStar } from "react-icons/io";

const Item = () => {
  return (
    <div className="w-96 h-[32rem] bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Resim Bölümü */}
      <div className="w-full h-[65%] cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src="https://img-lcwaikiki.mncdn.com/mnpadding/600/800/ffffff/mpsellerportal/v0/img_122424235v0_e42e5d54-6302-41fc-b6bb-4b6a2bacca40.jpg"
          alt="T-Shirt"
        />
      </div>
      
      {/* Ürün Bilgisi */}
      <div className="p-4 text-[#555555] text-lg flex flex-col gap-2">
        <h3 className="font-semibold">T-Shirt</h3>
        <p className="text-sm text-gray-500">White Shirt with good design</p>
      </div>

      {/* Yıldız Değerlendirmesi */}
      <div className="flex items-center px-4 text-2xl">
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <IoIosStar className="text-yellow-400" />
        <span className="text-base pl-3 text-gray-600">(8)</span>
      </div>

      {/* Fiyat Bilgisi */}
      <div className="flex items-center px-4 pt-4 text-3xl font-bold">
        <span>$</span>
        <p className="ml-1">29.99</p>
      </div>
    </div>
  );
};

export default Item;

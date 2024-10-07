import React from "react";
import { IoIosStar } from "react-icons/io";

const Item = ({item,key}) => {
  return (
    <div key={key} className="w-96 h-[32rem] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-150">
      {/* Resim Bölümü */}
      <div className="w-full h-[65%] cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={`http://localhost:5000/${item.image}`}
          alt="T-Shirt"
        />
      </div>
      
      {/* Ürün Bilgisi */}
      <div className="p-4 text-[#555555] text-lg flex flex-col gap-2">
        <h3 className="font-semibold">{item.type}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
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
        <p className="ml-1">{item.price}</p>
      </div>
    </div>
  );
};

export default Item;

import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [openLoginArea, setOpenLoginArea] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleMouseEnter = () => {
    setOpenLoginArea(true);
  };

  const handleMouseLeave = () => {
    setOpenLoginArea(false);
  };

  return (
    <div className="w-full h-32 border-b-2 border-gray-400 shadow-md flex items-center justify-between md:p-5 relative">
      <div className="text-2xl md:text-4xl font-medium flex items-center gap-3">
        <GiHamburgerMenu
          onClick={() => setOpenNavbar(!openNavbar)}
          className="block md:hidden cursor-pointer"
        />
        <Link to="/">
          <h3>DeSuits</h3>
        </Link>
      </div>
      <div className="hidden  md:flex gap-9">
        <a
          href="#"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          WOMEN
        </a>

        <a
          href="#"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          MEN
        </a>
        <a
          href="#"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          CHILD
        </a>
        <a
          href="#"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          BABY
        </a>
      </div>
      <div className="w-[20%] hidden relative md:block ">
        <input
          className="w-full h-10 border-2 outline-none p-2  border-black"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute right-0 top-2 text-2xl cursor-pointer text-black" />
      </div>
      <div className="flex gap-10">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex items-center gap-3 text-lg relative"
        >
          <CiUser className="text-2xl md:text-3xl" />
          <a href="" className="hidden md:block">
            Login
          </a>

          {openLoginArea && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-5 mt-2 p-4 w-36 md:w-72 bg-white shadow-lg flex flex-col gap-4"
            >
              <div className="">
                <Link to={"/login"}>
                  <button className="bg-slate-800 w-full text-white text-base md:text-xl h-10">
                    Login
                  </button>
                </Link>
              </div>
              <div className="text-xs md:text-sm">
                <span>You don't have an account?</span>
                <Link to={"/signup"}>
                  <strong> Sign up</strong>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-lg cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <MdFavoriteBorder className="text-2xl md:text-3xl " />
          <a href="" className="hidden md:block">
            Favorite
          </a>
        </div>
        <div className="flex items-center gap-3 text-lg  cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <div className="relative cursor-pointer ">
            <FiShoppingBag className="text-2xl md:text-3xl" />
            <span className="absolute w-5 h-5 rounded-full flex items-center justify-center bg-black text-white font-bold text-sm -top-2 -right-2">
              1
            </span>
          </div>
          <a href="" className="hidden md:block">
            Shopping Cart
          </a>
          <div></div>
        </div>
      </div>
      {openNavbar && (
        <div className="absolute -bottom-24 w-full h-24 bg-white">
          <div className="flex gap-5 flex-col p-4 z-50 bg-white">
            <div className="w-[50%] relative h-auto bg-black ">
              <input
                className="w-full h-10 border-2 outline-none p-2  border-black"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute right-0 top-2 text-2xl cursor-pointer text-black" />
            </div>
            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              WOMEN
            </a>

            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              MEN
            </a>
            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              CHILD
            </a>
            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              BABY
            </a>
           <div className="flex flex-col pt-10 gap-5">
           <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              HELP
            </a>
            <a
              href="#"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              CONTACT US
            </a>
            <div className="w-full h-16 bg-[#22242A] flex text-white font-bold gap-2 items-center rounded-md">
                <span>Phone:</span><p>0555 555 55 55</p>
            </div>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

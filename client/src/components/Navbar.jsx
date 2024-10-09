import  { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios"

const Navbar = () => {
  const [openLoginArea, setOpenLoginArea] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  

  const {user,setUser} = useContext(UserContext);

  const handleLogout = async()=>{
    try {
      const response = await axios.post("http://localhost:5000/api/auth/logout",{},{
        withCredentials:true
      })
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
      
    }
  }
  

  const handleMouseEnter = () => {
    setOpenLoginArea(true);
  };

  const handleMouseLeave = () => {
    setOpenLoginArea(false);
  };

  return (
    <div className="relative flex items-center justify-between w-full h-32 border-b-2 border-gray-400 shadow-md md:p-5">
      <div className="flex items-center gap-3 text-2xl font-medium md:text-4xl">
        <GiHamburgerMenu
          onClick={() => setOpenNavbar(!openNavbar)}
          className="block cursor-pointer md:hidden"
        />
        <Link to="/">
          <h3>DeSuits</h3>
        </Link>
      </div>
      <div className="hidden md:flex gap-9">
      <a
          href="/products"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          PRODUCTS
        </a>
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
          className="w-full h-10 p-2 border-2 border-black outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute right-0 text-2xl text-black cursor-pointer top-2" />
      </div>
      <div className="flex gap-10">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center gap-3 text-lg"
        >
          <CiUser className="text-2xl md:text-3xl" />
         <span className="hidden cursor-pointer md:block">login</span>

          {openLoginArea && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute flex flex-col gap-4 p-4 mt-2 bg-white shadow-lg top-2 w-36 md:w-72"
            >
              {
                user === null ? <div className="">
                <Link to={"/login"}>
                  <button className="w-full h-10 text-base text-white bg-slate-800 md:text-xl">
                    Login
                  </button>
                </Link>
              </div> : <div>Hello {user.name}</div>
              }
             {
              user === null ?  <div className="text-xs md:text-sm">
              <span>You dont have an account?</span>
              <Link to={"/signup"}>
                <strong> Sign up</strong>
              </Link>
            </div> : 
            <div className="w-full h-16 text-white">
              <button onClick={handleLogout} className="w-full h-auto bg-blue-800">Logout</button>
            </div>
             }
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
            <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-white bg-black rounded-full -top-2 -right-2">
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
        <div className="absolute z-50 w-full h-24 bg-white -bottom-24">
          <div className="z-50 flex flex-col gap-5 p-4 bg-white">
            <div className="w-[50%] relative h-auto bg-black ">
              <input
                className="w-full h-10 p-2 border-2 border-black outline-none"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute right-0 text-2xl text-black cursor-pointer top-2" />
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
           <div className="flex flex-col gap-5 pt-10">
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

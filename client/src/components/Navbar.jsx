import { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [openLoginArea, setOpenLoginArea] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const { setCategories, shoppingcartNumber } = useContext(UserContext);
  const [openSearchArea, setOpenSearchArea] = useState(false);

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setOpenLoginArea(true);
  };

  const handleMouseLeave = () => {
    setOpenLoginArea(false);
  };

  const handleCategories = (category) => {
    setCategories(category);
    navigate("/products");
    setOpenNavbar(false);
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
          onClick={() => handleCategories("WOMEN")}
          className="relative  inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          WOMEN
        </a>

        <a
          onClick={() => handleCategories("MEN")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          MEN
        </a>
        <a
          onClick={() => handleCategories("CHILD")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          CHILD
        </a>
        <a
          onClick={() => handleCategories("BABY")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          BABY
        </a>
      </div>
      <div className="w-[20%] hidden relative md:block ">
        <input
          onClick={() => setOpenSearchArea(true)}
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
              {user === null ? (
                <div className="">
                  <Link to={"/login"}>
                    <button className="w-full h-10 text-base text-white bg-slate-800 md:text-xl">
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                <div>Hello {user.name}</div>
              )}
              {user === null ? (
                <div className="text-xs md:text-sm">
                  <span>You dont have an account?</span>
                  <Link to={"/signup"}>
                    <strong> Sign up</strong>
                  </Link>
                </div>
              ) : (
                <div className="w-full h-16 text-white">
                  <button
                    onClick={handleLogout}
                    className="w-full h-auto bg-blue-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-lg cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <Link
            className="flex gap-3"
            onClick={() => setOpenNavbar(false)}
            to={"/favorites"}
          >
            <MdFavoriteBorder className="text-2xl md:text-3xl " />

            <a className="hidden md:block">Favorite</a>
          </Link>
        </div>
        <div className="flex items-center gap-3 text-lg  cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <Link onClick={() => setOpenNavbar(false)} to={"/shoppingcart"}>
            <div className="relative cursor-pointer ">
              <FiShoppingBag className="text-2xl md:text-3xl" />
              {shoppingcartNumber > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-white bg-black rounded-full -top-2 -right-2">
                  {shoppingcartNumber}
                </span>
              )}
            </div>
          </Link>
          <Link onClick={() => setOpenNavbar(false)} to={"/shoppingcart"}>
            <a href="" className="hidden md:block">
              Shopping Cart
            </a>
          </Link>
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
              href="/products"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              PRODUCTS
            </a>
            <a
              onClick={() => handleCategories("WOMEN")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              WOMEN
            </a>

            <a
              onClick={() => handleCategories("MEN")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              MEN
            </a>
            <a
              onClick={() => handleCategories("CHILD")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              CHILD
            </a>
            <a
              onClick={() => handleCategories("BABY")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              BABY
            </a>
            <div className="flex flex-col gap-5 pt-10">
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                HELP
              </a>
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                CONTACT US
              </a>
              <div className="w-full h-16 bg-[#22242A] flex text-white font-bold gap-2 items-center rounded-md">
                <span>Phone:</span>
                <p>0555 555 55 55</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {openSearchArea && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="p-5 flex justify-between h-40 animate-slideDown">
            <div className="flex  gap-3 text-2xl font-medium md:text-4xl">
              <GiHamburgerMenu
                onClick={() => setOpenNavbar(!openNavbar)}
                className="block cursor-pointer md:hidden"
              />
              <Link to="/">
                <h3 onClick={() => setOpenSearchArea(false)}>DeSuits</h3>
              </Link>
            </div>

            <div className="w-[40%] hidden relative md:block pt-20 ">
              <input
                onClick={() => setOpenSearchArea(true)}
                className="w-full h-10 p-2 border-2 border-black outline-none  "
                type="text"
                placeholder="Search for product, category or brand"
              />

              <div className="absolute right-0 text-3xl text-black cursor-pointer top-[86px] flex">
                <CiSearch />
                <IoCloseCircle onClick={() => setOpenSearchArea(false)} />
              </div>
            </div>
            <div className="flex gap-10">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative flex  gap-3 text-lg"
              >
                <CiUser className="text-2xl md:text-3xl" />

                {openLoginArea && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute flex flex-col gap-4 p-4 mt-2 bg-white shadow-lg top-2 -right-3 w-36 md:w-72"
                  >
                    {user === null ? (
                      <div className="">
                        <Link to={"/login"}>
                          <button onClick={()=>setOpenSearchArea(false)} className="w-full h-10 text-base text-white bg-slate-800 md:text-xl">
                            Login
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div>Hello {user.name}</div>
                    )}
                    {user === null ? (
                      <div className="text-xs md:text-sm">
                        <span>You dont have an account?</span>
                        <Link to={"/signup"}>
                          <strong> Sign up</strong>
                        </Link>
                      </div>
                    ) : (
                      <div className="w-full h-16 text-white">
                        <button
                          onClick={handleLogout}
                          className="w-full h-auto bg-blue-800"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex  gap-3 text-lg cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
                <Link
                  className="flex gap-3"
                  onClick={() => setOpenNavbar(false)}
                  to={"/favorites"}
                >
                  <MdFavoriteBorder className="text-2xl md:text-3xl " />
                </Link>
              </div>
              <div className="flex  gap-3 text-lg  cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
                <Link onClick={() => setOpenNavbar(false)} to={"/shoppingcart"}>
                  <div className="relative cursor-pointer ">
                    <FiShoppingBag className="text-2xl md:text-3xl" />
                    {shoppingcartNumber > 0 && (
                      <span className="absolute flex  justify-center w-5 h-5 text-sm font-bold text-white bg-black rounded-full -top-2 -right-2">
                        {shoppingcartNumber}
                      </span>
                    )}
                  </div>
                </Link>
                <Link
                  onClick={() => setOpenNavbar(false)}
                  to={"/shoppingcart"}
                ></Link>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center animate-slideUp ">
            <div className="w-[40%]   mr-10">
              <div>
                <h2 className="text-[#212529] text-2xl pt-8">
                  Popular Categories
                </h2>
              </div>
              <div className="flex w-full justify-between text-base font-semibold gap-5 pt-10">
                <a>Dress</a>
                <a>Jeans</a>
                <a>Pant</a>
                <a>Jacket</a>
                <a>Shirt</a>
                <a>Short</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

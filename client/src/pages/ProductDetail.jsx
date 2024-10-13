import React, { useContext, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { TbSTurnRight } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [images, setImages] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const { user } = useContext(UserContext);

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setSingleProduct(response.data);
      setImages(response.data[0].image.split(","));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuy = async () => {
    if (selectedSize === "") {
      console.log("select size!");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/addproduct",
          {
            user_id: user.id,
            product_id: id,
            size:selectedSize
          }
        );
        if (response.status === 200) {
          toast.success("product added!");
        } else {
          toast.error("error while adding product!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="w-full h-[160vh] flex justify-center">
      <div className="w-full h-full  flex shadow-xl">
        <div className="w-full  h-full p-5">
          <div className="w-full h-[45%] flex">
            <div className="w-full h-full ">
              {images[0] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[0]}`}
                  alt=""
                />
              )}
            </div>
            <div className="w-full h-full ">
              {images[1] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[1]}`}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="w-full h-[45%] flex">
            <div className="w-full h-full ">
              {images[2] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[2]}`}
                  alt=""
                />
              )}
            </div>
            <div className="w-full h-full ">
              {images[3] && (
                <img
                  className="w-full h-full object-cover"
                  src={`http://localhost:5000/${images[3]}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full p-10">
          <div className="flex text-3xl">
            <h3>
              De Casual Slim T-Shirt <span>Men</span>{" "}
            </h3>
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
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full h-auto pt-20">
              {selectedSize !== "" ? (
                <button
                  onClick={handleBuy}
                  className="w-full h-14 bg-blue-600 text-white text-xl rounded-sm font-semibold hover:bg-blue-500 ease-in-out duration-100 "
                >
                  Add To Shopping Cart
                </button>
              ) : (
                <button className="w-full h-14 bg-blue-600 text-white text-xl rounded-sm font-semibold  cursor-not-allowed ">
                  Add To Shopping Cart
                </button>
              )}
            </div>
            <div className="pt-16 text-xl">
              <h2>This item is shipped by De Suits dealers.</h2>
            </div>
            <div className="pt-10 flex text-xl items-center gap-3">
              <TbSTurnRight />
              <span>Return Within 120 Days</span>
            </div>

            <div className="pt-16 text-[#555555]">
              <h2 className="font-bold">Product Description</h2>
              <p>
                It stands out with its elasticated waist and adjustable
                drawstring design that provides a comfortable fit. It offers
                excellent functionality with its large cargo pockets that
                increase practical use. Elastic hem detail gives a modern and
                sporty look.
              </p>
            </div>

            <div className="pt-16 text-[#555555]">
              <h2 className="font-bold">Product Content and Features</h2>
              <p>
                It stands out with its elasticated waist and adjustable
                drawstring design that provides a comfortable fit. It offers
                excellent functionality with its large cargo pockets that
                increase practical use. Elastic hem detail gives a modern and
                sporty look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

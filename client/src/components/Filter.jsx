import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../UserContext/UserContext";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { categories, setCategories } = useContext(UserContext);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCheckboxChange = (category) => {

    const isSelected = selectedCategory === category;

    
    const newSelectedCategory = isSelected ? "" : category;

 
    setSelectedCategory(newSelectedCategory);
    setCategories(newSelectedCategory ? newSelectedCategory : ""); 

    setOpenFilter(false);
};


  return (
    <div className="w-[20%]  h-screen md:p-5 bg-white shadow-lg rounded-lg overflow-y-auto">
      <div className="absolute z-0 block text-3xl md:hidden">
        <GiHamburgerMenu onClick={() => setOpenFilter(true)} />
      </div>
      {openFilter && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 z-50 w-2/4 h-full max-w-xs bg-white">
            <div className="pt-5 pb-3 pl-5 text-2xl font-semibold text-gray-700 border-b">
              <h2>Filter Area</h2>
            </div>

            <div className="pt-8">
              <h3 className="pl-5 text-xl font-medium text-gray-600">Categories</h3>
              <div className="flex flex-col gap-3 p-5 text-gray-600">
                {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
                  <label
                    key={category}
                    className="transition duration-150 ease-in-out hover:text-black"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategory === category}
                      onChange={() => handleCheckboxChange(category)}
                    />{" "}
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Ürün Tipi bölümü burada kalabilir */}
            <div className="pt-5">
              <h3 className="pl-5 text-xl font-medium text-gray-600">Product Type</h3>
              <div className="flex flex-col gap-3 p-5 text-gray-600">
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Dress
                </label>
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Jeans
                </label>
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Pants
                </label>
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Jackets
                </label>
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Shirts
                </label>
                <label className="transition duration-150 ease-in-out hover:text-black">
                  <input type="checkbox" className="mr-2" /> Shorts
                </label>
              </div>
            </div>
          </div>

          <IoMdClose
            onClick={() => setOpenFilter(false)}
            className="absolute z-50 text-2xl text-white cursor-pointer top-5 right-5"
          />
        </div>
      )}

      <div className="hidden md:block ">
        <div className="pt-5 pb-3 pl-5 text-2xl font-semibold text-gray-700 border-b">
          <h2>Filter Area</h2>
        </div>

        <div className="pt-8">
          <h3 className="pl-5 text-xl font-medium text-gray-600">Categories</h3>
          <div className="flex flex-col gap-3 p-5 text-gray-600">
            {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
              <label
                key={category}
                className="transition duration-150 ease-in-out hover:text-black"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategory === category}
                  onChange={() => handleCheckboxChange(category)}
                />{" "}
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="pt-5">
          <h3 className="pl-5 text-xl font-medium text-gray-600">Product Type</h3>
          <div className="flex flex-col gap-3 p-5 text-gray-600">
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Dress
            </label>
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Jeans
            </label>
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Pants
            </label>
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Jackets
            </label>
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Shirts
            </label>
            <label className="transition duration-150 ease-in-out hover:text-black">
              <input type="checkbox" className="mr-2" /> Shorts
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

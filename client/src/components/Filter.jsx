import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../UserContext/UserContext";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { categories, setCategories } = useContext(UserContext);

  const [selectedCategories, setSelectedCategories] = useState(categories);

  const handleCheckboxChange = (category) => {
    const updatedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category], 
    };
    setSelectedCategories(updatedCategories);
    
    setCategories(updatedCategories); 
   
  };

  return (
    <div className="w-[20%]  h-screen md:p-5 bg-white shadow-lg rounded-lg overflow-y-auto">
      <div className="absolute block md:hidden text-3xl z-0">
        <GiHamburgerMenu onClick={() => setOpenFilter(true)} />
      </div>
      {openFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed left-0 top-0 w-2/4 max-w-xs h-full bg-white z-50">
            <div className="pl-5 pt-5 text-2xl font-semibold text-gray-700 border-b pb-3">
              <h2>Filter Area</h2>
            </div>

            <div className="pt-8">
              <h3 className="pl-5 text-xl font-medium text-gray-600">
                Categories
              </h3>
              <div className="flex flex-col p-5 gap-3 text-gray-600">
                {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
                  <label
                    key={category}
                    className="hover:text-black transition ease-in-out duration-150"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories[category] || false}
                      onChange={() => handleCheckboxChange(category)}
                    />{" "}
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-5">
              <h3 className="pl-5 text-xl font-medium text-gray-600">
                Product Type
              </h3>
              <div className="flex flex-col p-5 gap-3 text-gray-600">
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Dress
                </label>
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Jeans
                </label>
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Pants
                </label>
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Jackets
                </label>
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Shirts
                </label>
                <label className="hover:text-black transition ease-in-out duration-150">
                  <input type="checkbox" className="mr-2" /> Shorts
                </label>
              </div>
            </div>
          </div>

          <IoMdClose
            onClick={() => setOpenFilter(false)}
            className="text-white absolute top-5 right-5 text-2xl cursor-pointer z-50"
          />
        </div>
      )}

      <div className="hidden md:block ">
        <div className="pl-5 pt-5 text-2xl font-semibold text-gray-700 border-b pb-3">
          <h2>Filter Area</h2>
        </div>

        <div className="pt-8">
          <h3 className="pl-5 text-xl font-medium text-gray-600">Categories</h3>
          <div className="flex flex-col p-5 gap-3 text-gray-600">
            {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
              <label
                key={category}
                className="hover:text-black transition ease-in-out duration-150"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories[category] || false}
                  onChange={() => handleCheckboxChange(category)}
                />{" "}
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="pt-5">
          <h3 className="pl-5 text-xl font-medium text-gray-600">
            Product Type
          </h3>
          <div className="flex flex-col p-5 gap-3 text-gray-600">
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Dress
            </label>
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Jeans
            </label>
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Pants
            </label>
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Jackets
            </label>
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Shirts
            </label>
            <label className="hover:text-black transition ease-in-out duration-150">
              <input type="checkbox" className="mr-2" /> Shorts
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

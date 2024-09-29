import React from "react";

const Trend = () => {
  return (
    <div className="w-full h-auto">
      <div className="text-5xl font-thin p-3 text-[#212529] text-center">
        <h2>Trends</h2>
      </div>
      <div className="w-full flex gap-4 p-5">
       
        <div className="w-full h-[30rem] relative cursor-pointer transform transition-transform duration-300 group-hover:scale-[0.95] hover:scale-105 hover:z-10 ease-in-out ">
          <img
            className="w-full h-full object-cover "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/46461/uploads/urunresimleri/buyuk/siyah-stretch-uzun-elbise-nazliye-moda-8e2a80.jpeg"
            alt="Women's Clothing"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
          <div className="absolute inset-0 flex flex-col text-center justify-center items-center text-white text-5xl font-extrabold z-10 gap-5">
            <h2 className="mb-2">Women's clothing starting from</h2>
            <span className="block text-4xl text-white">$59.99</span>
          </div>
        </div>

        <div className="w-full h-[30rem] relative cursor-pointer transform transition-transform duration-300 group-hover:scale-[0.95] hover:scale-105 hover:z-10 ease-in-out">
          <img
            className="w-full h-full object-cover"
            src="https://nextluxury.com/wp-content/uploads/green-pants-with-blue-striped-sweater-dapper-mens-casual-wear-styles.jpg"
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute gap-5 inset-0 flex flex-col text-center justify-center items-center text-white text-5xl font-extrabold z-10">
            <h2 className="mb-2">Men's clothing starting from</h2>
            <span className="block text-4xl text-white">$49.99</span>
          </div>
        </div>

        
        <div className="w-full h-[30rem] relative cursor-pointer transform transition-transform duration-300 group-hover:scale-[0.95] hover:scale-105 hover:z-10 ease-in-out">
          <img
            className="w-full h-full object-cover"
            src="https://m.media-amazon.com/images/I/51lm+JrJaNL._AC_UY1000_.jpg"
            alt="Kid's Clothing"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col gap-5 text-center justify-center items-center text-white text-5xl font-extrabold z-10">
            <h2 className="mb-2">Kid's clothing starting from</h2>
            <span className="block text-4xl text-white">$29.99</span>
          </div>
        </div>

       
        <div className="w-full h-[30rem] relative cursor-pointer transform transition-transform duration-300 group-hover:scale-[0.95] hover:scale-105 hover:z-10 ease-in-out">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkxlzyEMKKwWl2vIoA9zm5Et2R3fQYyi5gCmIGdVzMHCrc2kEeC8Os7YWsudmsR2JTho&usqp=CAU"
            alt="Kid's Clothing"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col gap-5 text-center justify-center items-center text-white text-5xl font-extrabold z-10">
            <h2 className="mb-2">Kid's clothing starting from</h2>
            <span className="block text-4xl text-white">$29.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;

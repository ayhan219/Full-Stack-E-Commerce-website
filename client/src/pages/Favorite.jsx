import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";
import FavoriteItem from "../components/FavoriteItem";

const Favorite = () => {
  const { user } = useContext(UserContext);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const getFavorites = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getfavorites",
        {
          params: {
            user_id: user.id,
          },
        }
      );
      console.log(response.data);
      setFavoriteItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      getFavorites();
    }
  }, [user]);

  return (
    <div className="w-full h-[80vh] flex justify-center bg-gray-100">
      <div className="w-[80%] h-full flex flex-col items-center">
        <div className="text-3xl pt-10 pb-5">
          <h2>Favorite Products</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoriteItems.map((item, index) => (
            <FavoriteItem item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState("");
    const [products, setProducts] = useState([]);

    const getCurrentUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/getcurrent", {
                withCredentials: true
            });
            setUser(response.data);
        } catch (error) {
            console.log(error);
            setUser(null);
        }
    };

    const getProducts = async (category) => {
        try {
            
            const url = category 
                ? `http://localhost:5000/api/products?categories=${category}` 
                : "http://localhost:5000/api/products";

            const response = await axios.get(url);
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
        getProducts(categories);
    }, [categories]); 

    return (
        <UserContext.Provider value={{ user, setUser, categories, setCategories, setProducts, products }}>
            {children}
        </UserContext.Provider>
    );
};

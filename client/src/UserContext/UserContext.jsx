import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState("");
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [productId,setProductId] = useState("");

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
        setLoading(true);
        try {
            
            const url = category 
                ? `http://localhost:5000/api/products?categories=${category}` 
                : "http://localhost:5000/api/products";

            const response = await axios.get(url);
            
            setProducts(response.data);
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        getCurrentUser();
       
    }, []); 

    useEffect(() => {
        getProducts(categories);
    }, [categories]); 

    return (
        <UserContext.Provider value={{ user, setUser, categories, setCategories, setProducts, products,loading,productId,setProductId }}>
            {children}
        </UserContext.Provider>
    );
};

import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const UserContext = createContext();

export const UserProvider =({children})=>{
    const [user,setUser] = useState(null);
    const [categories,setCategories] = useState("");


    const getCurrentUser = async()=>{
        try {
            const response = await axios.get("http://localhost:5000/api/auth/getcurrent",{
                withCredentials:true
            })
            setUser(response.data)
            
        } catch (error) {
            console.log(error);
            setUser(null);
            
        }
    }

    useEffect(()=>{
        getCurrentUser();
        
    },[])

    return(
        <UserContext.Provider value={{user,setUser,categories,setCategories}}>
            {children}
        </UserContext.Provider>
    )
}



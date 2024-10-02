import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleLogin = async()=>{
       try {
        const response = await axios.post("http://localhost:5000/api/auth/login",{
            email,
            password
        },{
            withCredentials:true
        })
        console.log(response);
        
       } catch (error) {
        console.log(error);
        
       }
        
    }
    
  return (
    <div className='flex justify-center w-full h-screen'>
        <div className='w-[70%] h-full text-center pt-10 flex flex-col gap-2'>
            <div className="text-4xl">
                <h2>Login</h2>
            </div>
            <div className='flex justify-center w-full pt-5'>
            <TextField  
              fullWidth
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              id="email" 
              label="Email" 
              variant="outlined" 
            />
          </div>
          <div className='flex justify-center w-full pt-5'>
            <TextField
              fullWidth
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            
            />
          </div>
          <div className='flex justify-center w-full pt-5'>
            <button onClick={handleLogin}  className='w-full h-12 text-xl text-white bg-blue-700'>Login</button>
          </div>
          <div className='flex justify-center gap-3 pt-5 text-xl'>
            <p>You dont have an account?</p>
            <Link to={"/signup"}><span className='font-bold text-red-700 duration-100 ease-in-out hover:text-blue-500'>Signup</span></Link>
          </div>

        </div>

    </div>
  )
}

export default Login
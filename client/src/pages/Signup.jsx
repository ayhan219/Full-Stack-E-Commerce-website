import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

 const signupUser = async()=>{
    const birthdayConcat = day + "/"+month+"/"+year
    try {
        const response = await axios.post("http://localhost:5000/api/auth/signup",{
            name,
            surname,
            email,
            phone,
            password,
            birthday:birthdayConcat
        })
        if(response.status===200){
          navigate("/login");
        }
        
    } catch (error) {
        console.log(error);
        
    }
 }


  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className='w-full h-[80vh] flex justify-center items-center'> 
      <div className='w-[90%] md:w-[50%] h-full'>
        
        <div className='pt-10 text-3xl font-bold text-center'>
          <h2>Signup</h2>
        </div>

       
        <div className='flex flex-col'>
      
          <div className='flex justify-center w-full gap-5 pt-10'>
            <TextField 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              fullWidth 
              id="name" 
              label="Name" 
              variant="outlined" 
            />
            <TextField 
              onChange={(e) => setSurname(e.target.value)} 
              value={surname}  
              fullWidth 
              id="surname" 
              label="Surname" 
              variant="outlined" 
            />
          </div>

       
          <div className='flex justify-center w-full pt-5'>
            <TextField  
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              fullWidth 
              id="email" 
              label="Email" 
              variant="outlined" 
            />
          </div>

      
          <div className='flex justify-center w-full pt-5'>
            <TextField 
              onChange={(e) => setPhone(e.target.value)} 
              value={phone}  
              fullWidth 
              id="phone" 
              label="Phone"
              placeholder='(0__)'
              variant="outlined" 
            />
          </div>

        
          <div className='flex justify-center w-full pt-5'>
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
          </div>

         
          <div className='flex flex-col items-center justify-center w-full pt-8'>
            <label className='pb-2 text-lg font-semibold'>Your Birthday</label>
            <div className='flex justify-center w-full gap-4'>
              <select 
                className='w-[30%] border border-gray-300 p-2 rounded-md' 
                onChange={(e) => setDay(e.target.value)} 
                value={day}
              >
                <option value="">Day</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>

              <select 
                className='w-[40%] border border-gray-300 p-2 rounded-md' 
                onChange={(e) => setMonth(e.target.value)} 
                value={month}
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>

              <select 
                className='w-[30%] border border-gray-300 p-2 rounded-md' 
                onChange={(e) => setYear(e.target.value)} 
                value={year}
              >
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex justify-center w-full pt-5'>
            <button onClick={signupUser} className='w-full h-12 text-xl text-white bg-blue-700'>Submit</button>
          </div>
          <div className='flex justify-center gap-3 pt-5 text-xl'>
            <p>You have an account?</p>
            <Link to={"/login"}><span className='font-bold text-red-700 duration-100 ease-in-out hover:text-blue-500'>Login</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

const express = require("express");
const app = express()
const cors = require("cors")
const dotenv = require("dotenv");
const UserAuth = require("./routes/UserRoute")
const cookieParser = require("cookie-parser");


dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",UserAuth)

app.listen(5000,()=>{
    console.log("server listening on port 5000");
    
})




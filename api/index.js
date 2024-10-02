const express = require("express");
const app = express()
const cors = require("cors")
const dotenv = require("dotenv");
const UserAuth = require("./routes/UserRoute")
const CookieParser = require("cookie-parser");
const cookieParser = require("cookie-parser");


dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",UserAuth)

app.listen(5000,()=>{
    console.log("server listening on port 5000");
    
})




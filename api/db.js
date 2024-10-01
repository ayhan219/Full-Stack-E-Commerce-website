const mysql = require("mysql2");


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ayhan551", //database password,
    database:"mydb" // database name
})


connection.connect((err)=>{
    if(err){
        console.log("error while connecting db");
        return;
        
    }
    console.log("connected to db successfully");
    
})

module.exports = connection;
const DB = require("../db");


const getProducts = async(req,res)=>{
    const query = "select * from products"
    DB.query(query,(err,result)=>{
        if (err) {
            return reject({ message: "database error" });
          }

          return res.status(200).json(result)
    })
}

module.exports = {
    getProducts
}
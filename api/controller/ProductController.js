const DB = require("../db");

const getProducts = async (req, res) => {
    const { categories,type } = req.query;

    let query = "SELECT * FROM products WHERE 1=1";
    let queryParams = [];


    if (categories === "MEN") {
        query += " AND forWho = ?";
        queryParams.push("men");
    }

    if (categories === "WOMEN") {
        query += " AND forWho = ?";
        queryParams.push("women");
    }

    if (categories === "CHILD") {
        query += " AND forWho = ?";
        queryParams.push("child");
    }

    if (categories === "BABY") {
        query += " AND forWho = ?";
        queryParams.push("baby");
    }

    if(type){
        const typesArray = type.split(","); 
        const placeholders = typesArray.map(() => "?").join(","); 
        console.log(placeholders);
        
        query += ` AND type IN (${placeholders})`;
        queryParams.push(...typesArray);

    }

    DB.query(query, queryParams, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error" });
        }
        return res.status(200).json(result);
    });
};




const getSingleProduct = async(req,res)=>{
    
const id = req.params.id;

const query = "select * from products where id = ?"

DB.query(query,[id],(err,result)=>{
    if (err) {
        return res.status(500).json({ message: "database error" });
    }
    return res.status(200).json(result);
})
}

const removeFavorite = async(req,res)=>{

    const {user_id,id} = req.body;
    const query = "delete from favorites where user_id = ? and id = ?"

    DB.query(query,[user_id,id],(err,result)=>{
        if (err) {
            return res.status(500).json({ message: "database error" });
        }
        return res.status(200).json({message:"product removed from favorites"})
    })
}

module.exports = {
    getProducts,
    getSingleProduct,
    removeFavorite
};

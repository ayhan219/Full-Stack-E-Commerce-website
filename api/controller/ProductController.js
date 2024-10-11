const DB = require("../db");

const getProducts = async (req, res) => {
    const {categories} = req.query
    
    
    
    let query = "SELECT * FROM products WHERE 1=1";
    let queryParams = [];

    if (categories==="MEN") {
        query += " AND forWho = ?";
        queryParams.push("men");
    }

    if (categories==="WOMEN") {
        query += " AND forWho = ?";
        queryParams.push("women");
    }

    if (categories==="CHILD") {
        query += " AND forWho = ?";
        queryParams.push("child");
    }

    if (categories==="BABY") {
        query += " AND forWho = ?";
        queryParams.push("baby");
    }

    
    DB.query(query, queryParams, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "database error" });
        }
        return res.status(200).json(result);
    });
};

module.exports = {
    getProducts
};

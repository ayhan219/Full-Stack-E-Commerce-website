const DB = require("../db");

const getProducts = async (req, res) => {
    const { categories } = req.query;
    console.log(categories)
    
    let query = "SELECT * FROM products WHERE 1=1";
    let queryParams = [];

    if (categories==="men") {
        query += " AND forWho = ?";
        queryParams.push("men");
    }

    if (categories==="women") {
        query += " AND forWho = ?";
        queryParams.push("women");
    }

    if (categories==="child") {
        query += " AND forWho = ?";
        queryParams.push("child");
    }

    if (categories==="baby") {
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

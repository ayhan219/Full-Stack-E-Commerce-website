const express = require("express");
const router = express.Router();

const {getProducts,getSingleProduct,removeFavorite,getSearchedLetter} = require("../controller/ProductController");


router.get("/",getProducts)
router.get("/:id",getSingleProduct)
router.delete("/removefavorite",removeFavorite);
router.get("/getsearchedletter",getSearchedLetter)



module.exports = router;
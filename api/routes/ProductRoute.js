const express = require("express");
const router = express.Router();

const {getProducts,getSingleProduct,removeFavorite,getSearchedItem} = require("../controller/ProductController");


router.get("/",getProducts)
router.get("/:id",getSingleProduct)
router.delete("/removefavorite",removeFavorite);
router.get("/getsearcheditem",getSearchedItem)


module.exports = router;
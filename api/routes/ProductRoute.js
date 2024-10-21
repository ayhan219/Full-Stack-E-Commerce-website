const express = require("express");
const router = express.Router();

const {getProducts,getSingleProduct,removeFavorite} = require("../controller/ProductController");

router.get("/",getProducts)
router.get("/:id",getSingleProduct)
router.delete("/removefavorite",removeFavorite);




module.exports = router;
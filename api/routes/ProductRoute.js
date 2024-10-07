const express = require("express");
const router = express.Router();

const {getProducts} = require("../controller/ProductController");


router.get("/",getProducts)


module.exports = router;
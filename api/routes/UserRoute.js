const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  addProduct,
  getShoppingCart,
  deleteShoppingCart,
  getItemNumber,
  addToFavorites
} = require("../controller/UserController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/getcurrent", AuthMiddleware, getCurrentUser);
router.post("/logout", logoutUser);
router.post("/addproduct", addProduct);
router.get("/getshoppingcart", getShoppingCart);
router.get("/getitemnumber",getItemNumber)
router.delete("/deleteshoppingcart",deleteShoppingCart)
router.post("/addtofavorites",addToFavorites)

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} = require("../controller/UserController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/getcurrent", AuthMiddleware, getCurrentUser);
router.post("/logout",logoutUser)

module.exports = router;

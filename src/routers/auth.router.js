const express = require("express");
const authRouter = express.Router();
const {
  login,
  register,
  logout,
  currentUser,
  forGotPassword,
  resetPassword,
  verifyUser
} = require("../controllers/auth.controller");

authRouter.post("/login", login)
authRouter.post("/register", register)
authRouter.post("/logout", logout)
authRouter.get("/current", currentUser)
authRouter.post("/forgot-pass", forGotPassword)
authRouter.post("/reset-pass", resetPassword)
authRouter.post("/verify", verifyUser)


module.exports = authRouter;
const express = require("express");
const authRouter = require("./auth.router");
const blogRouter = require("./blog.router");
const commentsRouter = require("./comments.router");
const usersRouter = require("./users.router");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/blogs", blogRouter);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);

module.exports = router;
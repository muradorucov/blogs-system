const express = require("express");
const commentsRouter = express.Router();

commentsRouter.get("/", () => { })
commentsRouter.put("/:id", () => { })
commentsRouter.get("/:id", () => { })
commentsRouter.delete("/:id", () => { })
commentsRouter.patch("/:id", () => { })

module.exports = commentsRouter;
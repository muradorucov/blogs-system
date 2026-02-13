const express = require("express");
const blogRouter = express.Router();


blogRouter.get("/", () => { })
blogRouter.post("/", () => { })
blogRouter.put("/:id", () => { })
blogRouter.get("/:id", () => { })
blogRouter.delete("/:id", () => { })
blogRouter.patch("/:id", () => { })
blogRouter.get("/for-admin", () => { })
blogRouter.put("/:id/for-admin", () => { })
blogRouter.get("/:id/for-admin", () => { })

blogRouter.post("/:id/comment", () => { })
blogRouter.get("/:id/comment", () => { })


module.exports = blogRouter;
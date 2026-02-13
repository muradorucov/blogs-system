const express = require("express");
const router = require("./src/routers");

require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/api/v1", router)


// http://localhost:3000/api/v1/auth/login
// http://localhost:3000/api/v1/auth/login
// http://localhost:3000/api/v1/blogs/
app.listen(process.env.PORT)
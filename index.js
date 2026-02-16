const express = require("express");
const router = require("./src/routers");
const mongoDbConnection = require("./src/db");
const config = require("./src/config");

require("dotenv").config();
const app = express();

mongoDbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);


// http://localhost:3000/api/v1/auth/login
// http://localhost:3000/api/v1/auth/login
// http://localhost:3000/api/v1/blogs/
app.listen(config.PORT)
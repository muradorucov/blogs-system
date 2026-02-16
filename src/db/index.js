const mongoose = require('mongoose');
const config = require('../config');
const mongoDbConnection = async () => {
  try {
    mongoose.connect(config.MONGO_URL);
    console.log("Connect success");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = mongoDbConnection;
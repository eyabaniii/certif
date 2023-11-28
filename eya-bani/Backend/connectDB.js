const mongoose = require("mongoose");
const connect = async () => {
  try {
    console.log("initialisation");
    console.log("strating");
    console.log(process.env.DB_URI);
    await mongoose.connect(process.env.DB_URI);
    console.log("conneted to database");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;

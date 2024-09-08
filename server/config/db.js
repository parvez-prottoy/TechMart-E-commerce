const mongoose = require("mongoose");
const mongoURL = require("../config/config").mongoURL;
const colors = require("colors");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURL);
    console.log(
      colors.bgMagenta(`MongoDB Connected: ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;

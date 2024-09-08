require("dotenv").config("../.env");
const dev = {
  port: process.env.PORT || 8000,
  mongoURL:
    process.env.MONGO_URL || "mongodb://localhost:27017/TechMartE-commerce",
};
module.exports = dev;

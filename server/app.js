const express = require("express");
const app = express();
const { noFound, errorHandler } = require("./src/middlewares/errorHandler");
const baseRoute = require("./src/routes/base.route");
// ? connect DB
const connectDB = require("./config/db").apply();
// ? use middleware
const morgan = require("morgan");
const cors = require("cors");
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// ? use routes
app.use("/", baseRoute);
// ? use error handler
app.use(noFound);
app.use(errorHandler);

module.exports = app;

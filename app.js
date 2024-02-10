// import package with require
const express = require("express");
const mongoose = require("mongoose");
// body parser to conversion json
const bodyParser = require("body-parser");
require("dotenv/config");

// import Routes
const postRoute = require("./routes/posts");

// execute the package
const app = express();
app.use(bodyParser.json());
// middlewares
// execute a function when route is being hit
// it runs before every route when blank route
// middleware to get route
app.use("/posts", postRoute);

// app.use("/posts", (req, res) => {
//   console.log("I am running on posts route");
// });

app.get("/", (req, res) => {
  res.send("your route to Home");
});

// app.get("/posts", (req, res) => {
//   res.send("we are on posts");
// });

// connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Listen to the server
app.listen(8083, () => {
  console.log("Listening at port 8083");
});

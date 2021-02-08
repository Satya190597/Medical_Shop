// Imports +
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");

// Create an express application.
const app = express();

// Use - default middleware.
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Set port number
const port = process.env.PORT ? process.env.PORT : 4001;

app.use("/api", categoryRoute);
app.use("/api", productRoute);

app.get("/", function (request, response) {
  return response.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(
    `Medical Shop - Backend Application Started On Port Number ${port}`
  );
});

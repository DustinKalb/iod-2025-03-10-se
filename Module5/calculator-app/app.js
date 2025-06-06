const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static("public"));

const addRoute = require("./routes/calculator.routes");

app.use("/calculator", addRoute);

module.exports = app;

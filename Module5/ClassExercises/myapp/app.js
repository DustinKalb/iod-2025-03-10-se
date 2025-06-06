// app.js - new file at top level
const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static("public"));

// map all routes to the express app
const petRoutes = require("./routes/pet.routes");
const userRoutes = require("./routes/user.routes");
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/pet-api", petRoutes);
app.use("/user", userRoutes);
app.use("/calculator", calculatorRoutes);

// export the app
module.exports = app;

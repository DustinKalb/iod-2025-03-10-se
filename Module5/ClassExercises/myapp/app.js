// app.js - new file at top level
const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static("public"));

// map all routes to the express app
const petRoutes = require("./routes/pet.routes");
const userRoutes = require("./routes/user.routes");
const calculatorRoutes = require("./routes/calculator.routes");

app.use("/pet-api", petRoutes);
app.use("/user", userRoutes);
app.use("/calculator", calculatorRoutes);

// swagger documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// export the app
module.exports = app;

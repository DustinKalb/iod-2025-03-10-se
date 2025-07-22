const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static("public"));

const addRoute = require("./routes/calculator.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/calculator", addRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

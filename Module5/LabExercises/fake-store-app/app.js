const express = require("express");
const app = express();

app.use(express.json());
app.use("/", express.static("public"));

const productsRoutes = require("./routes/products.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/products", productsRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

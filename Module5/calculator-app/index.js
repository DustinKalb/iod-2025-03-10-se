const express = require("express");
const app = express();
const port = 3000;
const addRoute = require("./routes/calculator.routes");

app.use("/", express.static("public"));

app.use("/calculator", addRoute);

app.listen(port, () => {
  console.log(`Calculator app listening
at http://localhost:${port}`);
});

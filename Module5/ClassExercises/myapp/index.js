const express = require("express");
const app = express();
const port = 3000;
const petRoutes = require("./routes/pet.routes");
const calculatorRoutes = require("./routes/calculator.route");
const userRoutes = require("./routes/user.routes");

app.use(express.json());

app.use("/", express.static("public"));

app.use("/pet-api", petRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Microservice application." });
});

app.use("/api/trendinganime", apiRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

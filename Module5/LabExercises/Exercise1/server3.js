const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Server 3");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

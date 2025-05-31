const express = require("express");
const router = express.Router();

// GET pet-api/pets
router.get("/pets", (req, res) => {
  res.send("Hello World, This is my Pet Route!");
});

module.exports = router;

const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.post("/subtract", (req, res) => {
  const body = req.body;
  let number1 = parseInt(body.num1);
  let number2 = parseInt(body.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

module.exports = router;

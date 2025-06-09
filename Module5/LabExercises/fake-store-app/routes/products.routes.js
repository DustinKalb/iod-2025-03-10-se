// filepath: c:\Users\Dustin\Documents\IOD\iod-2025-03-10-se\Module5\LabExercises\fake-store-app\routes\products.routes.js
const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/products.controller");

router.get("/", getProducts);

module.exports = router;

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Trending anime
router.get("/", (req, res) => {
  Controllers.apiController.getTrendingAnime(req, res);
});

// Dynamic parameter: GET anime by ID
router.get("/:id", (req, res) => {
  Controllers.apiController.getAnimeById(req, res);
});

// Query parameter: Search anime by title
router.get("/search/title", (req, res) => {
  Controllers.apiController.searchAnime(req, res);
});

module.exports = router;

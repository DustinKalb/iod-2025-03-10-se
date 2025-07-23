const axios = require("axios");

const getTrendingAnime = (req, res) => {
  axios
    .get("https://kitsu.io/api/edge/trending/anime")
    .then((response) => res.send({ result: 200, data: response.data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// GET anime by ID (try 11469)
const getAnimeById = (req, res) => {
  const animeId = req.params.id;
  axios
    .get(`https://kitsu.io/api/edge/anime/${animeId}`)
    .then((response) => res.send({ result: 200, data: response.data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// GET anime by search query (try boku-no-hero)
const searchAnime = (req, res) => {
  const title = req.query.title;
  axios
    .get("https://kitsu.io/api/edge/anime", {
      params: { "filter[text]": title },
    })
    .then((response) => res.send({ result: 200, data: response.data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { getTrendingAnime, getAnimeById, searchAnime };

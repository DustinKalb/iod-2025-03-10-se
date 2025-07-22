let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.reactionController.getReactions(res);
});

router.post("/create", (req, res) => {
  Controllers.reactionController.createReaction(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.reactionController.updateReaction(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.reactionController.deleteReaction(req, res);
});

router.get("/user/:uid", (req, res) => {
  Controllers.reactionController.getUserReactions(req, res);
});

router.get("/post/:pid", (req, res) => {
  Controllers.reactionController.getPostReactions(req, res);
});

router.get("/comment/:cid", (req, res) => {
  Controllers.reactionController.getCommentReactions(req, res);
});

module.exports = router;

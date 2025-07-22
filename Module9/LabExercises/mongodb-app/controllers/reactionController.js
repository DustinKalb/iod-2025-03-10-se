"use strict";
let Models = require("../models");

const getReactions = (res) => {
  Models.Reaction.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createReaction = (data, res) => {
  console.log(data);
  new Models.Reaction(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateReaction = (req, res) => {
  console.log(req.body);
  Models.Reaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteReaction = (req, res) => {
  Models.Reaction.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserReactions = (req, res) => {
  Models.Reaction.find({ userId: req.params.uid })
    .populate({ path: "userId" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getPostReactions = (req, res) => {
  Models.Reaction.find({ postId: req.params.pid })
    .populate({ path: "postId" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCommentReactions = (req, res) => {
  Models.Reaction.find({ commentId: req.params.cid })
    .populate({ path: "commentId" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getReactions,
  createReaction,
  updateReaction,
  deleteReaction,
  getUserReactions,
  getPostReactions,
  getCommentReactions,
};

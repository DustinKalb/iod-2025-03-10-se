"use strict";
const Models = require("../models");

const getReactions = (res) => {
  Models.Reaction.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createReaction = (data, res) => {
  Models.Reaction.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateReaction = (req, res) => {
  Models.Reaction.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteReaction = (req, res) => {
  Models.Reaction.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserReactions = (req, res) => {
  // finds all posts for a given user and includes matching user details
  Models.Reaction.findAll({
    where: { userId: req.params.uid },
    include: Models.User,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getPostReactions = (req, res) => {
  // finds all posts for a given user and includes matching user details
  Models.Reaction.findAll({
    where: { postId: req.params.pid },
    include: Models.Post,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCommentReactions = (req, res) => {
  // finds all posts for a given user and includes matching user details
  Models.Reaction.findAll({
    where: { commentId: req.params.cid },
    include: Models.Comment,
  })
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

"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Reaction = require("./reaction");

// Define associations
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

Comment.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Comment, { foreignKey: "user_id" });

Comment.belongsTo(Post, { foreignKey: "post_id" });
Post.hasMany(Comment, { foreignKey: "post_id" });

Reaction.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Reaction, { foreignKey: "user_id" });

Reaction.belongsTo(Post, { foreignKey: "post_id" });
Post.hasMany(Reaction, { foreignKey: "post_id" });

Reaction.belongsTo(Comment, { foreignKey: "comment_id" });
Comment.hasMany(Reaction, { foreignKey: "comment_id" });

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  Post,
  Comment,
  Reaction,
  // also export any extra models here
};

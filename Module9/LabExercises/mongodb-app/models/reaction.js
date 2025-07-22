const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reactionSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: "comment" },
  content: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("reaction", reactionSchema);

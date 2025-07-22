const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true },
  content: { type: String, trim: true, required: true, unique: true },
  publishedAt: { type: Date, default: Date.now },
  imageUrl: { type: String, trim: true },
  shareUrl: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);

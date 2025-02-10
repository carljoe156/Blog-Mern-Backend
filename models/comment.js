const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: { type: String },
  blog: { type: String },
  postedBy: { type: String },
  postedTime: { type: Date, default: Date.now },
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;

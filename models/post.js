const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  picture: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;

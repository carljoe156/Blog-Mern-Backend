const Post = require("../models/post");
var ObjectId = require("mongoose").Types.ObjectId;

// Create Post
const createPost = async (req, res) => {
  try {
    const blog = new Post(req.body);
    await blog.save();
    res.status(200).json({ msg: "Blog Published Successfully" });
  } catch (e) {
    res.status(501).json({ msg: "Cannot Publish Blog, Try Again." });
  }
};

// Get Posts
const getPosts = async (req, res) => {
  const { category } = req.body;

  if (category === "") {
    try {
      const blogs = await Post.find({});
      res.status(200).json({ blogs: blogs });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  } else {
    try {
      const blogs = await Post.find({ categories: category });
      res.status(200).json({ blogs: blogs });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
};

// Update Post
const updatePost = async (req, res) => {
  const post = req.body;
  const newValue = {
    title: post.title,
    description: post.description,
    picture: post.picture,
    username: post.username,
    categories: post.categories,
    createdDate: new Date(),
  };

  try {
    await Post.updateOne({ _id: post.initialId }, newValue);
    res.status(200).json({ msg: "Updated Successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getBlog = async (req, res) => {
  const objectId = req.params.id;

  try {
    const blogData = await Post.findOne({ _id: new ObjectId(objectId) });

    if (blogData.length == 0) {
      res.status(404).json({ msg: "Invalid Object Id" });
    } else {
      res.status(200).json({ blogData: blogData });
    }
  } catch (e) {
    res.status(404).json({ msg: "Invalid Object Id" });
  }
};

const getMyBlogs = async (req, res) => {
  const { usernamedb } = req.body;

  const allBlogs = await Post.find({ username: usernamedb });

  res.status(200).json({ allBlogs });
};

const deleteBlog = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  await Post.deleteOne({ _id: id });

  res.status(200).json({ msg: "deleted" });
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  getBlog,
  getMyBlogs,
  deleteBlog,
};

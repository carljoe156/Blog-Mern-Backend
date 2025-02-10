const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
// const { createPost, getPosts, updatePost } = require("../controllers/post");
const { imageController } = require("../controllers/imagesController");
const upload = require("../utils/upload");

router.post("/file/upload", upload, imageController);

const {
  createPost,
  getPosts,
  updatePost,
  getBlog,
  getMyBlogs,
  deleteBlog,
} = require("../controllers/post");

// Route to create a new post (requires authentication)
router.post("/create", authenticateToken, createPost);

// Route to get posts (with optional category filtering)
router.post("/getPosts", getPosts);
// router.get("/", getPosts);

// Route to update an existing post
// router.post("/update", authenticateToken, updatePost);
router.post("/update", updatePost);

// Route for getting a single blog by ID
router.get("/blog/:id", getBlog);

// Route for getting blogs by the logged-in user
router.post("/myBlogs", getMyBlogs);

// Route for deleting a blog post
// router.post("/delete", authenticateToken, deleteBlog);
router.post("/delete", deleteBlog);

module.exports = router;

const express = require("express");
const { addComment, fetchComments } = require("../controllers/comments");

const router = express.Router();

router.post("/add", addComment);
router.post("/fetch", fetchComments);

module.exports = router;

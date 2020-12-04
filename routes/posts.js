const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//==> localhost:3000/posts
router.get("/", (req, res) => {
  res.send("post");
});

//==> localhost:3000/posts/specific
router.get("/specific", (req, res) => {
  res.send("specific");
});

router.post("/", (req, res) => {});

module.exports = router;

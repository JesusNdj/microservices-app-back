const express = require("express");
const router = new express.Router();
const { randomBytes } = require('crypto');

const posts = {};

router.get("/posts", (req, res) => {
  res.status(201).send(posts);
});

router.post("/posts", (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  res.status(201).send(posts[id]);
});

module.exports = router;

const express = require("express");

const router = express.Router();

// import Schema/model

const Post = require("../models/Post");
const { json } = require("body-parser");

// router.get("/", (req, res) => {
//   res.send("i am a post from routes");
// });

// we want to get all posts from DB

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/post1", (req, res) => {
  res.send("route inside post");
});

// make api post call to DB
// req.body need json . we need package => this req.body we get from react
router.post("/", async (req, res) => {
  //   console.log(req.body);
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// find specific id

router.get("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const posts = await Post.findById(req.params.postId);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// remove the data

router.delete("/:postId", async (res, req) => {
  try {
    const removed = await Post.remove({ _id: req.params.postId });
    res.json(removed);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
});

// export the route
module.exports = router;

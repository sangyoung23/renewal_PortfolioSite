const express = require("express");
const router = express.Router();

const { Post } = require("../Model/Post");
const { Counter } = require("../Model/Couter");

router.post("/submit", (req, res) => {
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      req.body.postNum = counter.postNum;
      const CommunityPost = new Post(req.body);
      CommunityPost.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
          () => {
            console.log(req.body);
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
});

router.post("/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      Post.find()
        .exec()
        .then((doc) => {
          res.status(200).json({ success: true, postList: doc });
        });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    author: req.body.author,
    content: req.body.content,
  };
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      Post.find()
        .exec()
        .then((doc) => {
          res.status(200).json({ success: true, postList: doc });
        });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;

const Post = require("../models/postModel");

exports.getAllPosts = (req, res) => {
  try {
    Post.find()
      .populate("userid")
      .exec((err, posts) => {
        if (err || !posts || posts.length == 0) {
          res.json({
            success: false,
            data: err,
          });
        } else {
          res.json({
            success: true,
            data: posts,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};

exports.getPost = (req, res) => {
  Post.findById(req.params.postid)
    .populate("userid")
    .exec((err, post) => {
      if (err || !post) {
        res.json({
          success: false,
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: post,
        });
      }
    });
};

exports.createPost = (req, res) => {
  try {
    const post = new Post(req.body);
    post.save((err, post) => {
      if (err || !post) {
        res.json({
          success: false,
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: post,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUserAllPosts = (req, res) => {
    try {
    Post.find({ userid: req.params.userid })
      .populate("userid")
      .exec((err, posts) => {
        if (err || !posts || posts.length == 0) {
          res.json({
            success: false,
            data: err,
          });
        } else {
          res.json({
            success: true,
            data: posts,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};

exports.getUserPost = (req, res) => {
  Post.find({ _id: req.params.postid, userid: req.params.userid })
    .populate("userid")
    .exec((err, post) => {
      if (err || !post) {
        res.json({
          success: false,
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: post,
        });
      }
    });
};

exports.updatePost = (req, res) => {
  try {
    const updateData = req.body;
    Post.findOneAndUpdate(
      {
        userid: req.params.userid,
        _id: req.params.postid,
      },
      updateData
    ).exec((err, post) => {
      if (err || !post) {
        res.json({
          success: false,
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: post,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = (req, res) => {
  try {
    Post.findOneAndDelete({
      userid: req.params.userid,
      _id: req.params.postid,
    }).exec((err, post) => {
      if (err) {
        res.json({
          success: false,
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: post,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/postCtrl");


//Get All Posts (Homepage) API
router.get("/posts", postCtrl.getAllPosts);

//Get Post(Homepage) API
router.get("/post/:postid", postCtrl.getPost);

//Create Post API
router.post("/post", postCtrl.createPost);

//Get All Posts (User) API
router.get("/posts/:userid", postCtrl.getUserAllPosts);

//Get Post(user) API
router.get("/post/:userid/:postid", postCtrl.getUserPost);

//Update Post API
router.put("/post/:userid/:postid", postCtrl.updatePost);

//Delete Post API
router.delete("/post/:userid/:postid", postCtrl.deletePost);

module.exports = router;

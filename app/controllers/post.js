const db = require("../models");
const config = require("../config/auth.js");
const Post = db.posts;
const User = db.users;


exports.createPost = (req, res) => {
  User.findOne({
    where: {
      id: req.body.userId
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
  Post.create({
    photo: req.body.photo,
    description: req.body.description,
    userId: req.body.userId
  })
    .then(post => {
      res.status(201).send({ 
        id: post.id,
        photo: post.photo,
        description: post.description,
        userId: post.userId,
        createdAt: post.createdAt});
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});
};
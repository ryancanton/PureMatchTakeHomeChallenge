const db = require("../models");
const Post = db.posts;
const User = db.users;
const s3Client = require("../models/s3Client.js");
const timeDiff = require("../middleware/timeDiff");



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
      s3Client.pushToS3(post)
      res.status(201).send({ 
        id: post.id,
        photo: post.photo,
        description: post.description,
        userId: post.userId,
        createdAt: post.createdAt
      });
    })
});
};

exports.getPost = (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(post => {
    if (!post) {
      return res.status(404).send({ message: "Post Not found." });
    }
    
    const postedAt = timeDiff(post.createdAt);

    res.status(200).send({ 
      id: post.id,
      description: post.description,
      userId: post.userId,
      createdAt: post.createdAt,
      postedAt: postedAt,
      photo: post.photo
    });
})
};
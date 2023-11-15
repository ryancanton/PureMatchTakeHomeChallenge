const db = require("../models");
const Post = db.posts;
const User = db.users;
const s3Client = require("../models/s3Client.js");
const timeDiff = require("../middleware/timeDiff");
const validate = require("../middleware/validate")


exports.createPost = (req, res) => {
  User.findOne({
    where: {
      id: req.body.userId
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
  validate.validatePhotosLength
  Post.create({
    photos: req.body.photos,
    description: req.body.description,
    userId: req.body.userId
  })
    .then(post => {
      s3Client.pushToS3(post)
      res.status(201).send({ message: "Post created and uploaded to S3 successfully" });
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
      postedAt: postedAt,
      photos: post.photos
    });
})
};

exports.updatePost = (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(post => {
    if (!post) {
      return res.status(404).send({ message: "Post Not found." });
    }
    post.description = req.body.description;
    post.save;
    res.status(200).send({
      id: post.id,
      description: post.description
    })
  })
};

exports.getPosts = (req, res) => {
  Post.findAll({
    limit: req.body.limit,
    offset: req.body.page * req.body.limit
  }).then(posts => {
    if (!posts) {
      return res.status(404).send({ message: "Posts Not found." });
    }
    res.status(200).send({ 
      posts: posts
    });
  })
};
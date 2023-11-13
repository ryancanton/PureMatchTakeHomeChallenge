const db = require("./app/models");
const Post = db.posts;
const User = db.users;

var bcrypt = require("bcrypt");

exports.seedTables = async (req, res) => {
  const bob = User.create({
    username: "Bob",
    email: "bob@email.com",
    password: bcrypt.hashSync("BobbyRulez", 8),
    createdAtTemp: Date.now()
  });
  const linda = User.create({
    username: "Linda",
    email: "linda@email.com",
    password: bcrypt.hashSync("LindaAintListenin", 8)
  });
  const carl = User.create({
    username: "Carl",
    email: "carl@email.com",
    password: bcrypt.hashSync("supersecretpassword", 8)
  });
  Post.create({
    photos: ["photo1", "photo2", "photo3"],
    description: "Neat Photo",
    userId: bob.id
  });
  Post.create({
    photos: ["photo1", "photo2", "photo3", "photo4", "photo5"],
    description: "Cool picture",
    userId: linda.id
  });
  Post.create({
    photos: ["photo1"],
    description: "Neatest Photo",
    userId: carl.id
  });
  console.log("Database Seeded Successfully")
}
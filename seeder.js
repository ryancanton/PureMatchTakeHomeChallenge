const db = require("./app/models");
const Post = db.posts;
const User = db.users;

var bcrypt = require("bcrypt");

exports.seedTables = async (req, res) => {
  console.log('laksjdf')
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
    photo: "encodedString1",
    description: "Neat Photo",
    userId: bob.id
  });
  Post.create({
    photo: "encodedString2",
    description: "Neater Photo",
    userId: linda.id
  });
  Post.create({
    photo: "encodedString3",
    description: "Neatest Photo",
    userId: carl.id
  });
}
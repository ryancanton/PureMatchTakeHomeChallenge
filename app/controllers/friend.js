const db = require("../models");
const User = db.users;
const Friend = db.friends;


exports.addFriend = (req, res) => {
  User.findOne({
    where: {
      id: req.body.friendId
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
  Friend.create({
    friendId: req.body.friendId,
    userId: req.params.id
  })
    .then(friend => {
      res.status(201).send({ message: "Friend added successfully!" });
    })
});
};
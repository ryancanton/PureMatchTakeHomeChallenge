const db = require("../models");
const User = db.users;
const Friend = db.friends;
const Sequelize = require("sequelize");

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
    username: user.username,
    email: user.email,
    userId: req.params.id
  })
    .then(friend => {
      res.status(201).send({ message: "Friend added successfully!" });
    })
});
};

exports.getFriends = async (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    getFriendObjects(user.id).then(async friends => {
      userData = [];
      for (i = 0; i < friends.length; i++) {
        const friend = friends[i]
        const mutualFriends = await getMutualFriendsCount(user.id, friends[i].friendId);
        friend.mutualFriendsCount = mutualFriends;
        friend.save;
        console.log(`${friend.username} has mutualFriends = ${friend.mutualFriendsCount}`)
        userData.push(friend);
      }
      console.log(`userData = ${JSON.stringify(userData)}`)
      res.status(200).send({ 
        friends: userData
      });
    })  
})
};

function getFriendObjects(id) {
  return Friend.findAll({where: {userId: id}});
}
const getMutualFriendsCount = async (userId1, userId2) => {
  const mutualFriendsCount = await Friend.count({
      where: {
          userId: userId1,
          // friendId: {

          // }
          friendId: {
            [Sequelize.Op.in]: Sequelize.literal(`(
                SELECT "friendId" FROM "friends" WHERE "userId" = ${userId2}
            )`)
        }
      }
  });

  return mutualFriendsCount;
};
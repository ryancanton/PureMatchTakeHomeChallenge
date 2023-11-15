module.exports = (sequelize, Sequelize) => {
  const Friend = sequelize.define("friends", {
    friendId: {
      type: Sequelize.INTEGER
    },
    mutualFriendsCount: {
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return Friend;
};

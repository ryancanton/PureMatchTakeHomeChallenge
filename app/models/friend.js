module.exports = (sequelize, Sequelize) => {
  const Friend = sequelize.define("friends", {
    friendID: {
      type: Sequelize.STRING
    }
  });

  return Friend;
};

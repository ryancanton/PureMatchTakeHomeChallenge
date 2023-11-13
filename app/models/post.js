module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    description: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.TEXT
    },
    createdAtTemp: {
      type: Sequelize.DATE
    }
  });

  return Post;
};
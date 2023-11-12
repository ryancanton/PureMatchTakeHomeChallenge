module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    description: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.TEXT
    }
  });

  return Post;
};
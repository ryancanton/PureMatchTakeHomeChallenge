module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    description: {
      type: Sequelize.STRING
    },
    photos: {
      type: Sequelize.ARRAY(Sequelize.TEXT)
    }
  });

  return Post;
};
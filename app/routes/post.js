const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/post");
const validate = require("../middleware/validate")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/v1/post",
    [authJwt.verifyToken],
    [validate.validatePhotosLength],
    controller.createPost
  );

  app.patch("/api/v1/post/:id", controller.updatePost);

  app.get("/api/v1/post/:id", controller.getPost);

  app.get("/api/v1/posts", controller.getPosts);
 
};
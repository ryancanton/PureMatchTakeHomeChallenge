const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/post");

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
    controller.createPost
  );

  app.get("/api/v1/post/:id", controller.getPost);
 
};
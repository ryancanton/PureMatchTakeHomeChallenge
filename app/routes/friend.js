const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/friend");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/v1/user/:id/friend",
    [authJwt.verifyToken],
    controller.addFriend
  );
 
};
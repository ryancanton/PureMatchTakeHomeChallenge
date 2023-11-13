const db = require("../models");

validatePhotosLength = (req, res, next) => {
  if (req.body.photos.length > 5) {
    res.status(400).send({
      message: "Failed! Too many photos!"
    });
    return;
  } 
  next();
};

const validate = {
  validatePhotosLength: validatePhotosLength
};

module.exports = validate;
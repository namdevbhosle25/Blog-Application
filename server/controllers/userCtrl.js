const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signUp = (req, res) => {
  try {
    const userModel = new User(req.body);
    userModel.password = bcrypt.hashSync(userModel.password, 10);

    User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err || !user) {
        userModel.save((err, user) => {
          if (err || !user) {
            res.json({
              success: false,
              data: err,
            });
          } else {
            res.json({
              success: true,
              data: user,
            });
          }
        });
      } else {
        res.json({
          success: false,
          data: "User Already Registered",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = (req, res) => {
  try {
    User.findOne({ email: req.body.email }).exec((err, user) => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          success: true,
          data: user,
        });
      } else {
        res.json({
          success: false,
          data: err,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

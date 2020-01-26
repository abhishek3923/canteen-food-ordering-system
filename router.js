var express = require("express");
var router = express.Router();

var user = require("./user");

router.get('/hello/:mobile', function(req, res, next) {
    let mobile = req.params.mobile;
    user.findOne({ mobile: mobile }).exec()
    .then(resp => {
        res.status(200).json(resp);
    })
});

router.post("/byebye", function(req, res, next) {
  let reqBody = req.body;
  let userObj = {
    name: reqBody.name,
    mobile: reqBody.mobile,
    emailaddress: reqBody.emailaddress,
    password: reqBody.password
  };
  const savedUser = new user(userObj);
  savedUser.save();
  res.status(201).json(savedUser);
});

module.exports = router;
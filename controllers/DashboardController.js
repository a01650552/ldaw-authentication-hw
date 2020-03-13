let userModel = require('../models/User');

exports.index = (req, res) => {
  let user = req.user;
  res.render('dashboard/index', {user: user});
}

exports.users = (req, res) => {
  let user = req.user;
  userModel.findAll()
  .then((data) => {
    let users = data;
    res.render('admin/users', {user: user, users: users})
  });
}
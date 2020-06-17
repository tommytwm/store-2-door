var User = require('../models/User');

exports.create_user = function(req, res) {
    var new_user = new User(req.body);

    User.createUser(new_user, function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

exports.delete_user = function(req, res) {
  User.deleteUser(req.params.uid, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
});
};

exports.edit_user = function(req, res) {
  User.editUser(req.body.uid, req.body.name, req.body.geoLocId, req.body.email, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
});
};

exports.get_user_by_id = function (req, res) {
    User.getUserById(req.params.uid, function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

exports.get_users_with_reviews = function (req, res) {
  User.getUsersWithReviews(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
  });
};

exports.get_user_by_name = function (req, res) {
  User.getUserByName(req.body.name, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
  });
};

exports.get_all_users = function (req, res) {
    User.getAllUsers(function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

exports.login_user = function (req, res) {
  User.loginUser(req.body.name, req.body.email, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
  });
};
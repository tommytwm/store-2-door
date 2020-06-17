var User = require('../models/User');

exports.create_user = function(req, res) {
    var new_user = new User(req.body);

    User.createUser(new_user, function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

exports.add_user = function(req, res) {
  User.addUser(req.body.name, req.body.email, req.params.geoLocId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
});
};

exports.delete_user = function(req, res) {
  User.addUser(req.params.uid, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
});
};

exports.edit_user = function(req, res) {
  User.editUser(req.params.uid, req.body.name, req.body.email, req.params.geoLocId, function(err, user) {
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

exports.get_all_users = function (req, res) {
    User.getAllUsers(function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
};

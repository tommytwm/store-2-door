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
  User.addUser(req.params.name, req.params.email, req.params.geoLocId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
});
}

exports.get_user_by_id = function (req, res) {
    User.getUserById(req.params.userId, function(err, user) {
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

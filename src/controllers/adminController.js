var Admin = require('../models/Admin');

exports.create_admin = function(req, res) {
    var new_admin = new Admin(req.body);

    Admin.createAdmin(new_admin, function(err, admin) {
        if (err)
          res.send(err);
        res.json(admin);
    });
};

exports.get_admin_by_id = function (req, res) {
    Admin.getAdminById(req.params.adminId, function(err, admin) {
        if (err)
          res.send(err);
        res.json(admin);
    });
};

exports.get_all_admins = function (req, res) {
    Admin.getAllAdmins(function(err, admin) {
        if (err)
          res.send(err);
        res.json(admin);
    });
};

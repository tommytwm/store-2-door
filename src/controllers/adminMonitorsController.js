var AdminMonitors = require('../models/AdminMonitors');

exports.create_admin_monitors = function(req, res) {
    var new_admin_monitors = new AdminMonitors(req.body);

    AdminMonitors.createAdminMonitors(new_admin_monitors, function(err, adminMonitors) {
        if (err)
          res.send(err);
        res.json(adminMonitors);
    });
};

exports.get_admin_monitors_by_id = function (req, res) {
    AdminMonitors.getAdminMonitorsById(req.params.adminMonitorsId, function(err, adminMonitors) {
        if (err)
          res.send(err);
        res.json(adminMonitors);
    });
};

exports.get_all_admin_monitors = function (req, res) {
    AdminMonitors.getAllAdminMonitors(function(err, adminMonitors) {
        if (err)
          res.send(err);
        res.json(adminMonitors);
    });
};

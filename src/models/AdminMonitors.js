var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var AdminMonitors = function(adminMonitors) {
    this.adminId = adminMonitors.adminId;
    this.requestId = adminMonitors.requestId;
    this.providerId = adminMonitors.providerId;
}

AdminMonitors.createAdminMonitors = function(newAdminMonitors, result) {
    createModel("adminmonitors", newAdminMonitors, result);
};

AdminMonitors.getAdminMonitorsById = function(requestId, result) {
    sql.query(
        {
            sql: "SELECT * FROM adminmonitors WHERE requestId = ?",
            values: [requestId] 
        },
        function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        }
    );
};

AdminMonitors.getAllAdminMonitors = function(result) {
    getAllModels("adminmonitors", result);
};

module.exports = AdminMonitors;
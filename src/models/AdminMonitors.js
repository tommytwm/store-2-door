const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var AdminMonitors = function(adminMonitors) {
    this.adminId = adminMonitors.adminId;
    this.requestId = adminMonitors.requestId;
    this.providerId = adminMonitors.providerId;
}

AdminMonitors.createAdminMonitors = function(newAdminMonitors, result) {
    createModel("adminmonitors", newAdminMonitors, result);
};

AdminMonitors.getAdminMonitorsById = function(adminMonitorsId, result) {
    getModelById("adminmonitors", adminMonitorsId, result);
};

AdminMonitors.getAllAdminMonitors = function(result) {
    getAllModels("adminmonitors", result);
};

module.exports = AdminMonitors;
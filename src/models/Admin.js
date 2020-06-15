const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Admin = function(admin) {
    this.adminId = admin.adminId;
    this.name = admin.name;
}

Admin.createAdmin = function(newAdmin, result) {
    createModel("admin", newAdmin, result);
};

Admin.getAdminById = function(adminId, result) {
    getModelById("admin", adminId, result);
};

Admin.getAllAdmins = function(result) {
    getAllModels("admin", result);
};

module.exports = Admin;
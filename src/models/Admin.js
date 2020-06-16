var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Admin = function(admin) {
    this.adminId = admin.adminId;
    this.name = admin.name;
}

Admin.createAdmin = function(newAdmin, result) {
    createModel("admin", newAdmin, result);
};

Admin.getAdminById = function(adminId, result) {
    sql.query(
        {
            sql: "SELECT * FROM admin WHERE adminId = ?",
            values: [adminId] 
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

Admin.getAllAdmins = function(result) {
    getAllModels("admin", result);
};

module.exports = Admin;
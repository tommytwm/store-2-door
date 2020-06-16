var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var ProviderGoesTo = function(providerGoesTo) {
    this.uid = providerGoesTo.uid;
    this.storeId = providerGoesTo.storeId;
}

ProviderGoesTo.createProviderGoesTo = function(newProviderGoesTo, result) {
    createModel("providergoesto", newProviderGoesTo, result);
};

ProviderGoesTo.getProviderGoesToById = function(uid, storeId, result) {
    sql.query(
        {
            sql: "SELECT * FROM providergoesto WHERE (uid = ? AND storeId = ?)",
            values: [uid, storeId] 
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


ProviderGoesTo.getProviderGoesToByPId = function (uid, result) {
    sql.query(
        {
            sql: "SELECT * FROM providergoesto WHERE (uid = ?)",
            values: [uid]
        },
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        }
    );
};

ProviderGoesTo.getAllProviderGoesTos = function(result) {
    getAllModels("providergoesto", result);
};

module.exports = ProviderGoesTo;
var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Provider = function(provider) {
    this.uid = provider.uid;
    this.numDeliveries = provider.numDeliveries;
    this.requestId = provider.requestId;
}

Provider.createProvider = function(newProvider, result) {
    createModel("provider", newProvider, result);
};

Provider.getProviderById = function(uid, result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, p.numDeliveries FROM provider WHERE uid = ?",
            values: [providerId] 
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

Provider.getAllProviderProfiles = function(result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, p.numDeliveries FROM user u, provider p WHERE p.uid = u.uid",
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

Provider.getProvidersByNumDeliveries = function(numDeliveries, result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, p.numDeliveries FROM user u, provider p WHERE p.numDeliveries = ?",
            values: [numDeliveries]
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

Provider.getAllProviders = function(result) {
    getAllModels("provider", result);
};

module.exports = Provider;
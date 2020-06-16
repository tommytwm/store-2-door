var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Store = function(store) {
    this.storeId = store.storeId;
    this.name = store.name;
    this.geoLocId = store.geoLocId;
}

Store.createStore = function(newStore, result) {
    createModel("store", newStore, result);
};

Store.getStoreById = function(storeId, result) {
    sql.query(
        {
            sql: "SELECT * FROM store WHERE storeId = ?",
            values: [storeId] 
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

Store.getAllStores = function(result) {
    getAllModels("store", result);
};

module.exports = Store;
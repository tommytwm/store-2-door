var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Store = function(store) {
    this.storeId = store.storeId;
    this.name = store.name;
    this.geoLocId = store.geoLocId;
}

Store.createStore = function (newStore, result) {
    console.log("GETTING CREATE")
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
            else {
                console.log("GETTING BY ID")
                result(null, res);
            }
        }
    );
};

Store.getOrganicStores = function (result) {
    sql.query(
        {
            sql: "SELECT * FROM store s WHERE NOT EXISTS (SELECT i.name FROM item i WHERE i.name LIKE '%organic%' AND NOT EXISTS (SELECT i1.name FROM item i1 WHERE i1.storeId = s.storeId AND i.name = i1.name))"
        },
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log("GETTING ORGANIC")
                result(null, res);
            }
        }
    );
};

Store.getAllStores = function (result) {
    console.log("GETTING ALL")
    getAllModels("store", result);
};

module.exports = Store;
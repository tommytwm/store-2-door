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

Store.editStore = function(storeId, name, geoLocId, result) {
    sql.query(
        {
            sql: "UPDATE store SET name = ?, geoLocId = ? WHERE storeId = ?",
            values: [name, geoLocId, storeId] 
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
}

Store.deleteStore = function(storeId, result) {
    sql.query(
        {
            sql: "DELETE FROM store WHERE storeId = ?",
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
                result(null, res);
            }
        }
    );
};

Store.getOrganicStores = function (result) {
    sql.query(
        {
            sql: "SELECT s.storeId, s.name, s.geoLocId FROM store s WHERE NOT EXISTS (SELECT i.name FROM item i WHERE i.name LIKE '%organic%' AND NOT EXISTS (SELECT i1.name FROM item i1 WHERE i1.storeId = s.storeId AND i.name = i1.name))",
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

Store.getStoreWithMinItems = function(num, result) {
    sql.query(
        {
            sql: "SELECT * FROM store s WHERE EXISTS (SELECT COUNT(itemId) FROM item i WHERE i.storeId = s.storeId GROUP BY i.storeId HAVING COUNT(*) >= ?)",
            values: [num] 
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


Store.getAllStores = function (result) {
    getAllModels("store", result);
};

Store.getAllStoresWithoutGeoLoc = function (result) {
    sql.query(
        {
            sql: "SELECT storeId, name FROM store"
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

module.exports = Store;
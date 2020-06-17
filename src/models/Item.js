var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Item = function(item) {
    this.itemId = item.itemId;
    this.name = item.name;
    this.price = item.price;
    this.maxOrder = item.maxOrder;
    this.supplierId = item.supplierId;
    this.storeId = item.storeId;
}

Item.createItem = function(newItem, result) {
    createModel("item", newItem, result);
};

Item.deleteItem = function(itemId, result) {
    sql.query(
        {
            sql: "DELETE FROM item WHERE itemId = ?",
            values: [itemId] 
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

Item.getItemById = function(itemId, result) {
    sql.query(
        {
            sql: "SELECT * FROM item WHERE itemId = ?",
            values: [itemId] 
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

Item.getItemsByStoreId = function (storeId, result) {
    sql.query(
        {
            sql: "SELECT * FROM item WHERE storeId = ?",
            values: [storeId]
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

Item.getItemsBySupplierId = function (supplierId, result) {
    sql.query(
        {
            sql: "SELECT * FROM item WHERE supplierId = ?",
            values: [supplierId]
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

Item.getItemsBelowPrice = function (price, result) {
    sql.query(
        {
            sql: "SELECT * FROM item WHERE price <= ?",
            values: [price]
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
}

Item.getAllItems = function(result) {
    getAllModels("item", result);
};

module.exports = Item;
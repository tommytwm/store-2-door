var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var ContainsItem = function(containsItem) {
    this.requestId = containsItem.requestId;
    this.itemId = containsItem.itemId;
}

ContainsItem.createContainsItem = function(newContainsItem, result) {
    createModel("containsitem", newContainsItem, result);
};

ContainsItem.getContainsItemById = function(requestId, itemId, result) {
    sql.query(
        {
            sql: "SELECT * FROM containsitem WHERE (requestId = ? AND itemId = ?)",
            values: [requestId, itemId] 
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

ContainsItem.getAllContainItems = function(result) {
    getAllModels("containsitem", result);
};

module.exports = ContainsItem;
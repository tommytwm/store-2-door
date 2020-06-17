var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var OrderRequest = function(orderRequest) {
    this.requestId = orderRequest.requestId;
    this.receiverId = orderRequest.receiverId;
}

OrderRequest.createOrderRequest = function(newOrderRequest, result) {
    createModel("orderrequest", newOrderRequest, result);
};

OrderRequest.getOrderRequestById = function(requestId, result) {
    sql.query(
        {
            sql: "SELECT * FROM orderrequest WHERE requestId = ?",
            values: [requestId] 
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

OrderRequest.getOrderRequestByReceiverId = function(receiverId, result) {
    sql.query(
        {
            sql: "SELECT * FROM orderrequest WHERE receiverId = ?",
            values: [receiverId] 
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

OrderRequest.getAllOrderRequests = function(result) {
    getAllModels("orderrequest", result);
};

module.exports = OrderRequest;
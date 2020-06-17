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

OrderRequest.deleteOrderRequest = function(requestId, result) {
    sql.query(
        {
            sql: "DELETE FROM orderrequest WHERE requestId = ?",
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

OrderRequest.getOrderRequestById = function(requestId, result) {
    sql.query(
        {
            sql: "SELECT receiverId FROM orderrequest WHERE requestId = ?",
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
            sql: "SELECT o.requestId, SUM(i.price) totalprice FROM orderrequest o, containsitem c, item i WHERE receiverId = ? AND c.requestId = o.requestId AND c.itemId = i.itemId GROUP BY (o.requestId)",
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
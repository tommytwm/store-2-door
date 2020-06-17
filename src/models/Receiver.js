var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Receiver = function(receiver) {
    this.uid = receiver.uid;
    this.numOrders = receiver.numOrders;
}

Receiver.createReceiver = function(newReceiver, result) {
    createModel("receiver", newReceiver, result);
};

Receiver.orderRequest = function(requestId, receiverId, result) {
    sql.query(
        {
            sql: "INSERT INTO orderrequest VALUES(requestId = ?, receiverId = ?)",
            values: [requestId, receiverId] 
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

Receiver.getReceiverById = function(receiverId, result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, r.numOrders FROM user u, receiver r WHERE u.uid = ? AND r.uid = ?",
            values: [receiverId, receiverId] 
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

Receiver.getAllReceiverProfiles = function(result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, r.numOrders FROM user u, receiver r WHERE r.uid = u.uid",
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

Receiver.getReceiversByNumOrder = function(numOrder, result) {
    sql.query(
        {
            sql: "SELECT u.name, u.email, u.geoLocId, r.numOrders FROM user u, receiver r WHERE r.numOrder = ?",
            values: [numOrder] 
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

Receiver.getAllReceivers = function(result) {
    getAllModels("receiver", result);
};

module.exports = Receiver;
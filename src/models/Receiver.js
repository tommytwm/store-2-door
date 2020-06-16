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

Receiver.getReceiverById = function(receiverId, result) {
    sql.query(
        {
            sql: "SELECT * FROM receiver WHERE uid = ?",
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

Receiver.getAllReceivers = function(result) {
    getAllModels("receiver", result);
};

module.exports = Receiver;
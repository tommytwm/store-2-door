const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Receiver = function(receiver) {
    this.uid = receiver.uid;
    this.numOrders = receiver.numOrders;
}

Receiver.createReceiver = function(newReceiver, result) {
    createModel("receiver", newReceiver, result);
};

Receiver.getReceiverById = function(receiverId, result) {
    getModelById("receiver", receiverId, result);
};

Receiver.getAllReceivers = function(result) {
    getAllModels("receiver", result);
};

module.exports = Receiver;
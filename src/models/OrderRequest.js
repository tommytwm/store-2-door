const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var OrderRequest = function(orderRequest) {
    this.requestId = orderRequest.requestId;
    this.receiverId = orderRequest.receiverId;
}

OrderRequest.createOrderRequest = function(newOrderRequest, result) {
    createModel("orderrequest", newOrderRequest, result);
};

OrderRequest.getOrderRequestById = function(orderRequestId, result) {
    getModelById("orderrequest", orderRequestId, result);
};

OrderRequest.getAllOrderRequests = function(result) {
    getAllModels("orderrequest", result);
};

module.exports = OrderRequest;
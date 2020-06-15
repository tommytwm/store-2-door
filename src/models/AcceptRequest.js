const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var AcceptRequest = function(acceptRequest) {
    this.requestId = acceptRequest.requestId;
    this.providerId = acceptRequest.providerId;
    this.isAccepted = acceptRequest.isAccepted;
}

AcceptRequest.createAcceptRequest = function(newAcceptRequest, result) {
    createModel("acceptrequest", newAcceptRequest, result);
};

AcceptRequest.getAcceptRequestById = function(acceptRequestId, result) {
    getModelById("acceptrequest", acceptRequestId, result);
};

AcceptRequest.getAllAcceptRequests = function(result) {
    getAllModels("acceptrequest", result);
};

module.exports = AcceptRequest;
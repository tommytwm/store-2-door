const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Provider = function(provider) {
    this.uid = provider.uid;
    this.numDeliveries = provider.numDeliveries;
    this.requestId = provider.requestId;
}

Provider.createProvider = function(newProvider, result) {
    createModel("provider", newProvider, result);
};

Provider.getProviderById = function(providerId, result) {
    getModelById("provider", providerId, result);
};

Provider.getAllProviders = function(result) {
    getAllModels("provider", result);
};

module.exports = Provider;
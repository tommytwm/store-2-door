const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var ProviderGoesTo = function(providerGoesTo) {
    this.uid = providerGoesTo.uid;
    this.storeId = providerGoesTo.storeId;
}

ProviderGoesTo.createProviderGoesTo = function(newProviderGoesTo, result) {
    createModel("providergoesto", newProviderGoesTo, result);
};

ProviderGoesTo.getProviderGoesToById = function(providerGoesToId, result) {
    getModelById("providergoesto", providerGoesToId, result);
};

ProviderGoesTo.getAllProviderGoesTos = function(result) {
    getAllModels("providergoesto", result);
};

module.exports = ProviderGoesTo;
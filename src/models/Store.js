const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Store = function(store) {
    this.storeId = store.storeId;
    this.name = store.name;
    this.geoLocId = store.geoLocId;
}

Store.createStore = function(newStore, result) {
    createModel("store", newStore, result);
};

Store.getStoreById = function(storeId, result) {
    getModelById("store", storeId, result);
};

Store.getAllStores = function(result) {
    getAllModels("store", result);
};

module.exports = Store;
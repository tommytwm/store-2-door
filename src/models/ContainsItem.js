const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var ContainsItem = function(containsItem) {
    this.requestId = containsItem.requestId;
    this.itemId = containsItem.itemId;
}

ContainsItem.createContainsItem = function(newContainsItem, result) {
    createModel("containsitem", newContainsItem, result);
};

ContainsItem.getContainsItemById = function(containsItemId, result) {
    getModelById("containsitem", containsItemId, result);
};

ContainsItem.getAllContainItems = function(result) {
    getAllModels("containsitem", result);
};

module.exports = ContainsItem;
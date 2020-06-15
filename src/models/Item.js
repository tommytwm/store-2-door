const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Item = function(item) {
    this.itemId = item.itemId;
    this.name = item.name;
    this.price = item.price;
    this.maxOrder = item.maxOrder;
    this.supplierId = item.supplierId;
    this.storeId = item.storeId;
}

Item.createItem = function(newItem, result) {
    createModel("item", newItem, result);
};

Item.getItemById = function(itemId, result) {
    getModelById("item", itemId, result);
};

Item.getAllItems = function(result) {
    getAllModels("item", result);
};

module.exports = Item;
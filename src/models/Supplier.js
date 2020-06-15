const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Supplier = function(supplier) {
    this.supplierId = supplier.supplierId;
    this.name = supplier.name;
    this.rating = supplier.rating;
}

Supplier.createSupplier = function(newSupplier, result) {
    createModel("supplier", newSupplier, result);
};

Supplier.getSupplierById = function(supplierId, result) {
    getModelById("supplier", supplierId, result);
};

Supplier.getAllSuppliers = function(result) {
    getAllModels("supplier", result);
};

module.exports = Supplier;
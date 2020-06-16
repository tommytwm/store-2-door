var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
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
    sql.query(
        {
            sql: "SELECT * FROM supplier WHERE supplierId = ?",
            values: [supplierId] 
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

Supplier.getAllSuppliers = function(result) {
    getAllModels("supplier", result);
};

module.exports = Supplier;
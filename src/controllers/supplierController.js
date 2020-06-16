var Supplier = require('../models/Supplier');

exports.create_supplier = function(req, res) {
    var new_supplier = new Supplier(req.body);

    Supplier.createSupplier(new_supplier, function(err, supplier) {
        if (err)
          res.send(err);
        res.json(supplier);
    });
};

exports.get_supplier_by_id = function (req, res) {
    Supplier.getSupplierById(req.params.supplierId, function(err, supplier) {
        if (err)
          res.send(err);
        res.json(supplier);
    });
};

exports.get_all_suppliers = function (req, res) {
    Supplier.getAllSuppliers(function(err, supplier) {
        if (err)
          res.send(err);
        res.json(supplier);
    });
};

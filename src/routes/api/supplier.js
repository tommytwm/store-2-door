var router = require('express').Router();
var supplierController = require('../../controllers/supplierController');

router.get('/:supplierId', supplierController.get_supplier_by_id);
router.get('/', supplierController.get_all_suppliers);

router.post('/', supplierController.create_supplier);

module.exports = router;

var router = require('express').Router();
var itemController = require('../../controllers/itemController');

router.get('/by-item/:itemId', itemController.get_item_by_id);
router.get('/by-store/:storeId', itemController.get_items_by_store_id);
router.get('/:supplierId', itemController.get_items_by_supplier_id);
router.get('/items-priced-under/', itemController.get_items_below_price);
router.get('/', itemController.get_all_items);

router.post('/', itemController.create_item);

router.delete('/:itemId', itemController.delete_item);

module.exports = router;

var router = require('express').Router();
var itemController = require('../../controllers/itemController');

router.get('/:itemId', itemController.get_item_by_id);
router.get('/:storeId', itemController.get_item_by_store_id);
router.get('/items-priced-under/', itemController.get_items_below_price);
router.get('/', itemController.get_all_items);
router.post('/add-item/:supplierId/:storeId', itemController.add_item);
router.post('/', itemController.create_item);

module.exports = router;

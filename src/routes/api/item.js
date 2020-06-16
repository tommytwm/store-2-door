var router = require('express').Router();
var itemController = require('../../controllers/itemController');

router.get('/:itemId', itemController.get_item_by_id);
router.get('/:storeId', itemController.get_item_by_store_id);
router.get('/', itemController.get_all_items);

router.post('/', itemController.create_item);

module.exports = router;

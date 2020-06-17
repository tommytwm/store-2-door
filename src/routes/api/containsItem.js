var router = require('express').Router();
var containsItemController = require('../../controllers/containsItemController');

router.get('/:requestId/:itemId', containsItemController.get_contains_item_by_id);
router.get('/:requestId', containsItemController.get_contains_item_by_request_id);
router.get('/', containsItemController.get_all_contains_items);
router.post('/request/:requestId/:itemId', containsItemController.request_item);
router.post('/', containsItemController.create_contains_item);

module.exports = router;

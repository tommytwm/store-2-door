var router = require('express').Router();
var containsItemController = require('../../controllers/containsItemController');

router.get('/:containsItemId', containsItemController.get_contains_item_by_id);
router.get('/', containsItemController.get_all_contains_items);

router.post('/', containsItemController.create_contains_item);

module.exports = router;

var router = require('express').Router();
var storeController = require('../../controllers/storeController');


router.get('/', storeController.get_all_stores);
router.get('/min-items/:num', storeController.get_store_with_min_items);
router.get('/organics', storeController.get_organic_stores);
router.get('/:storeId', storeController.get_store_by_id);
router.put('/update', storeController.edit_store);

router.post('/', storeController.create_store);


router.delete('/', storeController.delete_store);

module.exports = router;

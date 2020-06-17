var router = require('express').Router();
var storeController = require('../../controllers/storeController');

router.get('/:storeId', storeController.get_store_by_id);
router.get('/', storeController.get_all_stores);

router.post('/', storeController.create_store);
router.post('/get-organic-stores/', storeController.get_organic_stores)

module.exports = router;

var router = require('express').Router();
var providerGoesToController = require('../../controllers/providerGoesToController');

router.get('/:uid/:storeId', providerGoesToController.get_provider_goes_to_store_id);
router.get('/', providerGoesToController.get_all_provider_goes_tos);
router.get('/:uid', providerGoesToController.get_provider_id);

router.post('/', providerGoesToController.create_provider_goes_to);

module.exports = router;

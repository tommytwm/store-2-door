var router = require('express').Router();
var providerController = require('../../controllers/providerController');

router.get('/:providerId', providerController.get_provider_by_id);
router.get('/', providerController.get_all_providers);

router.post('/', providerController.create_provider);

module.exports = router;

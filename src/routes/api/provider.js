var router = require('express').Router();
var providerController = require('../../controllers/providerController');

router.get('/:uid', providerController.get_provider_by_id);
router.get('/profiles/', providerController.get_all_provider_profiles);
router.get('/', providerController.get_all_providers);

router.post('/', providerController.create_provider);

module.exports = router;

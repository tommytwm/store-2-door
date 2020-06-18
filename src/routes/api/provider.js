var router = require('express').Router();
var providerController = require('../../controllers/providerController');


router.post('/', providerController.create_provider);
router.get('/profiles/', providerController.get_all_provider_profiles);
router.get('/:uid', providerController.get_provider_by_id);

router.get('/profiles/num-deliveries', providerController.get_provider_by_num_deliveries);
router.get('/', providerController.get_all_providers);

module.exports = router;

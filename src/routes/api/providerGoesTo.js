var router = require('express').Router();
var providerGoesToController = require('../../controllers/providerGoesToController');

router.get('/:providerGoesToId', providerGoesToController.get_provider_goes_to_by_id);
router.get('/', providerGoesToController.get_all_provider_goes_tos);

router.post('/', providerGoesToController.create_provider_goes_to);

module.exports = router;

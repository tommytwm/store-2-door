var router = require('express').Router();
var acceptRequestController = require('../../controllers/acceptRequestController');

router.get('/request/:requestId', acceptRequestController.get_accept_request_by_requestId);
router.get('/:requestId/:providerId', acceptRequestController.get_accept_request_by_id);
router.get('/:providerId', acceptRequestController.get_accept_request_by_provider_id);
router.get('/', acceptRequestController.get_all_accept_requests);

router.post('/', acceptRequestController.create_accept_request);

router.put('/:requestId/:providerId', acceptRequestController.update_accept_request);

router.delete('/remove-request/:requestId/:providerId', acceptRequestController.deleted_accepted_request);

module.exports = router;

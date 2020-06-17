var router = require('express').Router();
var acceptRequestController = require('../../controllers/acceptRequestController');

router.get('/:requestId/:providerId', acceptRequestController.get_accept_request_by_id);
router.get('/', acceptRequestController.get_all_accept_requests);
router.get('/:requestId', acceptRequestController.get_accept_request_by_requestId);
router.post('/', acceptRequestController.create_accept_request);

router.delete('/remove-request/:requestId/:providerId', acceptRequestController.deleted_accepted_request);

module.exports = router;

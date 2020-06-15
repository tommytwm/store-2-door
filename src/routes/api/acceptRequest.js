var router = require('express').Router();
var acceptRequestController = require('../../controllers/acceptRequestController');

router.get('/:acceptRequestId', acceptRequestController.get_accept_request_by_id);
router.get('/', acceptRequestController.get_all_accept_requests);

router.post('/', acceptRequestController.create_accept_request);

module.exports = router;

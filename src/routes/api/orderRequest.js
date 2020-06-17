var router = require('express').Router();
var orderRequestController = require('../../controllers/orderRequestController');

router.get('/:requestId', orderRequestController.get_order_request_by_id);
router.get('/by-receiver/:receiverId', orderRequestController.get_order_request_by_receiver_id);
router.get('/', orderRequestController.get_all_order_requests);
router.post('/', orderRequestController.create_order_request);
router.delete('/:requestId', orderRequestController.delete_order_request);

module.exports = router;

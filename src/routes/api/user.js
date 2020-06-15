var router = require('express').Router();
var userController = require('../../controllers/userController');

router.get('/:userId', userController.get_user_by_id);
router.get('/', userController.get_all_users);

router.post('/', userController.create_user);

module.exports = router;

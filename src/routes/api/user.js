var router = require('express').Router();
var userController = require('../../controllers/userController');

router.get('/:userId', userController.get_user_by_id);
router.get('/reviewed-users', userController.get_users_with_reviews);
router.get('/', userController.get_all_users);
router.post('/user/:name/:email/:geoLocId');
router.post('/', userController.create_user);

module.exports = router;

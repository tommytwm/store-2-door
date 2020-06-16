var router = require('express').Router();
var userController = require('../../controllers/userController');

router.get('/:uid', userController.get_user_by_id);
router.get('/reviewed-users', userController.get_users_with_reviews);
router.get('/', userController.get_all_users);
router.post('/:name/:email/:geoLocId', userController.add_user);
router.post('/', userController.create_user);
router.delete('/:uid', userController.delete_user);

module.exports = router;

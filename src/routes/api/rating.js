var router = require('express').Router();
var ratingController = require('../../controllers/ratingController');

router.get('/:ratingId', ratingController.get_rating_by_id);
router.get('/:minRating', ratingController.get_users_with_rating);
router.get('/', ratingController.get_all_ratings);
router.post('/add/:uid', ratingController.add_rating);
router.post('/', ratingController.create_rating);
router.delete('/:uid')

module.exports = router;

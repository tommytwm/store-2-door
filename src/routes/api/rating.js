var router = require('express').Router();
var ratingController = require('../../controllers/ratingController');

router.get('/:ratingId', ratingController.get_rating_by_id);
router.get('/min/:minRating', ratingController.get_users_with_min_rating);
router.get('/user/:uid', ratingController.get_rating_by_uid);
router.get('/', ratingController.get_all_ratings);
router.post('/add/:uid', ratingController.add_rating);
router.post('/', ratingController.create_rating)
router.delete('/delete/:ratingId', ratingController.delete_rating);

module.exports = router;

var router = require('express').Router();
var ratingController = require('../../controllers/ratingController');

router.get('/:ratingId', ratingController.get_rating_by_id);
router.get('/', ratingController.get_all_ratings);

router.post('/', ratingController.create_rating);

module.exports = router;

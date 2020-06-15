var router = require('express').Router();
var geoLocationController = require('../../controllers/geoLocationController');

router.get('/:geoLocationId', geoLocationController.get_geo_location_by_id);
router.get('/', geoLocationController.get_all_geo_locations);

router.post('/', geoLocationController.create_geo_location);

module.exports = router;

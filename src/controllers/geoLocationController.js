var GeoLocation = require('../models/GeoLocation');

exports.create_geo_location = function(req, res) {
    var new_geo_location = new GeoLocation(req.body);

    GeoLocation.createGeoLocation(new_geo_location, function(err, geoLocation) {
        if (err)
          res.send(err);
        res.json(geoLocation);
    });
};

exports.get_geo_location_by_id = function (req, res) {
    GeoLocation.getGeoLocationById(req.params.geoLocationId, function(err, geoLocation) {
        if (err)
          res.send(err);
        res.json(geoLocation);
    });
};

exports.get_all_geo_locations = function (req, res) {
    GeoLocation.getAllGeoLocations(function(err, geoLocation) {
        if (err)
          res.send(err);
        res.json(geoLocation);
    });
};

var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var GeoLocation = function(geoLocation) {
    this.geoLocId = geoLocation.geoLocId;
    this.latitude = geoLocation.latitude;
    this.longitude = geoLocation.longitude;
}

GeoLocation.createGeoLocation = function(newGeoLocation, result) {
    createModel("geolocation", newGeoLocation, result);
};

GeoLocation.getGeoLocationById = function(geoLocationId, result) {
    sql.query(
        {
            sql: "SELECT * FROM geolocation WHERE geoLocId = ?",
            values: [geoLocationId] 
        },
        function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        }
    ); 
};

GeoLocation.getAllGeoLocations = function(result) {
    getAllModels("geolocation", result);
};

module.exports = GeoLocation;
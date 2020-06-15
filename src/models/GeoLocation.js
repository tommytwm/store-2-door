const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
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
    getModelById("geolocation", geoLocationId, result);
};

GeoLocation.getAllGeoLocations = function(result) {
    getAllModels("geolocation", result);
};

module.exports = GeoLocation;
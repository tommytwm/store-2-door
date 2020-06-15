const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getModelById = QueryUtils.getModelById;
const getAllModels = QueryUtils.getAllModels;

var Rating = function(rating) {
    this.ratingId = rating.ratingId;
    this.rate = rating.rate;
    this.comment = rating.comment;
    this.uid = rating.uid;
}

Rating.createRating = function(newRating, result) {
    createModel("rating", newRating, result);
};

Rating.getRatingById = function(ratingId, result) {
    getModelById("rating", ratingId, result);
};

Rating.getAllRatings = function(result) {
    getAllModels("rating", result);
};

module.exports = Rating;
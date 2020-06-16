var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
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
    sql.query(
        {
            sql: "SELECT * FROM rating WHERE ratingId = ?",
            values: [ratingId] 
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

Rating.getUsersByRating = function(minRating, result) {
    sql.query(
        {
            sql: "SELECT uid FROM rating WHERE ratingId >= ?",
            values: [minRating]
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
}

Rating.getAllRatings = function(result) {
    getAllModels("rating", result);
};

module.exports = Rating;
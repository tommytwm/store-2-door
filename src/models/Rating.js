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

Rating.addRating = function(rate, comment, uid, result) {
    sql.query(
        {
            sql: "INSERT INTO rating (rate, comment, uid) VALUES (rate = ?, comment = ?, uid = ?)",
            values: [rate, comment, uid] 
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

Rating.deleteRating = function(ratingId, result) {
    sql.query(
        {
            sql: "DELETE FROM rating WHERE ratingId = ?",
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

Rating.getUsersWithRating = function(minRating, result) {
    sql.query(
        {
            sql: "SELECT uid, rate FROM rating WHERE ratingId >= ?",
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

Rating.getUsersWithRating = function(minRating, result) {
    sql.query(
        {
            sql: "SELECT uid FROM rate WHERE ratingId >= ?",
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
};

Rating.getAllRatings = function(result) {
    getAllModels("rating", result);
};

module.exports = Rating;
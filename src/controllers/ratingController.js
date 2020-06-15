var Rating = require('../models/Rating');

exports.create_rating = function(req, res) {
    var new_rating = new Rating(req.body);

    Rating.createRating(new_rating, function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};

exports.get_rating_by_id = function (req, res) {
    Rating.getRatingById(req.params.ratingId, function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};

exports.get_all_ratings = function (req, res) {
    Rating.getAllRatings(function(err, rating) {
        if (err)
          res.send(err);
        res.json(rating);
    });
};

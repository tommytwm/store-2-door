var ProviderGoesTo = require('../models/ProviderGoesTo');

exports.create_provider_goes_to = function(req, res) {
    var new_provider_goes_to = new ProviderGoesTo(req.body);

    ProviderGoesTo.createProviderGoesTo(new_provider_goes_to, function(err, providerGoesTo) {
        if (err)
          res.send(err);
        res.json(providerGoesTo);
    });
};

exports.get_provider_goes_to_by_id = function (req, res) {
    ProviderGoesTo.getProviderGoesToById(req.params.providerGoesToId, function(err, providerGoesTo) {
        if (err)
          res.send(err);
        res.json(providerGoesTo);
    });
};

exports.get_all_provider_goes_tos = function (req, res) {
    ProviderGoesTo.getAllProviderGoesTos(function(err, providerGoesTo) {
        if (err)
          res.send(err);
        res.json(providerGoesTo);
    });
};

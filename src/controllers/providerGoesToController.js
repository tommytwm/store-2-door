var ProviderGoesTo = require('../models/ProviderGoesTo');

exports.create_provider_goes_to = function(req, res) {
    var new_provider_goes_to = new ProviderGoesTo(req.body);

    ProviderGoesTo.createProviderGoesTo(new_provider_goes_to, function(err, providerGoesTo) {
        if (err)
          res.send(err);
        res.json(providerGoesTo);
    });
};

exports.get_provider_goes_to_store_id = function (req, res) {
    ProviderGoesTo.getProviderGoesToStoreId(req.params.uid, req.params.storeId, function(err, providerGoesTo) {
        if (err)
          res.send(err);
        res.json(providerGoesTo);
    });
};

exports.get_provider_id = function (req, res) {
    ProviderGoesTo.getProviderId(req.params.uid, function (err, providerGoesTo) {
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

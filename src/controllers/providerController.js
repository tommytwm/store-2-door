var Provider = require('../models/Provider');

exports.create_provider = function(req, res) {
  var new_provider = new Provider(req.body);

  Provider.createProvider(new_provider, function(err, provider) {
      if (err)
        res.send(err);
      res.json(provider);
  });
};

exports.get_provider_by_id = function (req, res) {
  Provider.getProviderById(req.params.uid, function(err, provider) {
      if (err)
        res.send(err);
      res.json(provider);
  });
};

exports.get_all_provider_profiles = function (req, res) {
  Provider.getAllProviderProfiles(function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.get_provider_by_num_deliveries = function (req, res) {
  Provider.getProvidersByNumDeliveries(req.body.numDeliveries, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.get_all_providers = function (req, res) {
  Provider.getAllProviders(function(err, provider) {
      if (err)
        res.send(err);
      res.json(provider);
  });
};

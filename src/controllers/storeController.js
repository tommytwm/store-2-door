var Store = require('../models/Store');

exports.create_store = function(req, res) {
    var new_store = new Store(req.body);

    Store.createStore(new_store, function(err, store) {
        if (err)
          res.send(err);
        res.json(store);
    });
};

exports.edit_store = function (req, res) {
  Store.editStore(req.body.storeId, req.body.name, req.body.geoLocId, function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.delete_store = function (req, res) {
  Store.deleteStore(req.params.storeId, function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.get_store_by_id = function (req, res) {
  Store.getStoreById(req.params.storeId, function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.get_organic_stores = function (req, res) {
  Store.getOrganicStores(function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.get_store_with_min_items = function (req, res) {
  Store.getStoreWithMinItems(req.params.num, function(err, store) {
      if (err)
          res.send(err);
      res.json(store);
  });
};

exports.get_all_stores = function (req, res) {
    Store.getAllStores(function(err, store) {
        if (err)
          res.send(err);
        res.json(store);
    });
};

exports.get_all_stores_without_geoloc = function (req, res) {
  Store.getAllStoresWithoutGeoLoc(function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
}

var Store = require('../models/Store');

exports.create_store = function(req, res) {
    var new_store = new Store(req.body);

    Store.createStore(new_store, function(err, store) {
        if (err)
          res.send(err);
        res.json(store);
    });
};

exports.add_store = function (req, res) {
  Store.addStore(req.body.name, req.param.geoLocId, function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.edit_store = function (req, res) {
  Store.editStore(req.param.storeId, req.body.name, req.param.geoLocId, function(err, store) {
      if (err)
        res.send(err);
      res.json(store);
  });
};

exports.delete_store = function (req, res) {
  Store.deleteStore(req.param.storeId, function(err, store) {
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

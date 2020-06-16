var Store = require('../models/Store');

exports.create_store = function(req, res) {
    var new_store = new Store(req.body);

    Store.createStore(new_store, function(err, store) {
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

exports.get_all_stores = function (req, res) {
    Store.getAllStores(function(err, store) {
        if (err)
          res.send(err);
        res.json(store);
    });
};

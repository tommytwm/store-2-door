var Item = require('../models/Item');

exports.create_item = function(req, res) {
    var new_item = new Item(req.body);

    Item.createItem(new_item, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
    });
};

exports.delete_item = function (req, res) {
    Item.deleteItem(req.params.itemId, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
    });
};

exports.get_item_by_id = function (req, res) {
    Item.getItemById(req.params.itemId, function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
    });
};

exports.get_items_by_store_id = function (req, res) {
    Item.getItemsByStoreId(req.params.storeId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.get_items_by_supplier_id = function (req, res) {
    Item.getItemsByStoreId(req.params.supplierId, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.get_items_below_price = function (req, res) {
    Item.getItemByStoreId(req.body.price, function (err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.get_all_items = function (req, res) {
    Item.getAllItems(function(err, item) {
        if (err)
          res.send(err);
        res.json(item);
    });
};

var ContainsItem = require('../models/ContainsItem');

exports.create_contains_item = function(req, res) {
    var new_contains_item = new ContainsItem(req.body);

    ContainsItem.createContainsItem(new_contains_item, function(err, containsItem) {
        if (err)
          res.send(err);
        res.json(containsItem);
    });
};

exports.request_item = function (req, res) {
  ContainsItem.requestItem(req.params.body.requestId, req.params.body.itemId, function(err, containsItem) {
    if (err)
      res.send(err);
    res.json(containsItem);
});
};

exports.get_contains_item_by_id = function (req, res) {
    ContainsItem.getContainsItemById(req.params.requestId, req.params.itemId, function(err, containsItem) {
        if (err)
          res.send(err);
        res.json(containsItem);
    });
};

exports.get_all_contains_items = function (req, res) {
    ContainsItem.getAllContainItems(function(err, containsItem) {
        if (err)
          res.send(err);
        res.json(containsItem);
    });
};

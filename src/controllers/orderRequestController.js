var OrderRequest = require('../models/OrderRequest');

exports.create_order_request = function(req, res) {
    console.log(req.body);
    var new_order_request = new OrderRequest(req.body);

    OrderRequest.createOrderRequest(new_order_request, function(err, orderRequest) {
        if (err)
          res.send(err);
        res.json(orderRequest);
    });
};

exports.delete_order_request = function (req, res) {
  OrderRequest.deleteOrderRequest(req.params.requestId, function(err, orderRequest) {
      if (err)
        res.send(err);
      res.json(orderRequest);
  });
};

exports.get_order_request_by_id = function (req, res) {
    OrderRequest.getOrderRequestById(req.params.requestId, function(err, orderRequest) {
        if (err)
          res.send(err);
        res.json(orderRequest);
    });
};

exports.get_order_request_by_receiver_id = function (req, res) {
  OrderRequest.getOrderRequestByReceiverId(req.params.receiverId, function(err, orderRequest) {
      if (err)
        res.send(err);
      res.json(orderRequest);
  });
};

exports.get_all_order_requests = function (req, res) {
    OrderRequest.getAllOrderRequests(function(err, orderRequest) {
        if (err)
          res.send(err);
        res.json(orderRequest);
    });
};

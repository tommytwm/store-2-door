var OrderRequest = require('../models/OrderRequest');
var AcceptRequest = require('../models/AcceptRequest');
var Provider = require('../models/Provider');

exports.create_order_request = function(req, res) {
  OrderRequest.createOrderRequest(req.body.receiverId, function(err, orderRequest) {
      if (err) {
        res.send(err);
      }

      Provider.getAllProviders(function(err, providers) {
        providers.forEach((provider) => {
          const newAcceptRequest = {requestId: orderRequest,
                                    providerId: provider.uid,
                                    isAccepted: 0};
          AcceptRequest.createAcceptRequest(newAcceptRequest, function(err, acceptRequest) {
            if (err)
              res.send(err);
          });
        });
      });
        
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

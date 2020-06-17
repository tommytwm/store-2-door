var AcceptRequest = require('../models/AcceptRequest');

exports.create_accept_request = function(req, res) {
    var new_accept_request = new AcceptRequest(req.body);

    AcceptRequest.createAcceptRequest(new_accept_request, function(err, acceptRequest) {
        if (err)
          res.send(err);
        res.json(acceptRequest);
    });
};

exports.get_accept_request_by_id = function (req, res) {
    AcceptRequest.getAcceptRequestById(req.params.requestId, req.params.providerId, function(err, acceptRequest) {
        if (err)
          res.send(err);
        res.json(acceptRequest);
    });
};

exports.get_accept_request_by_provider_id = function (req, res) {
  AcceptRequest.getAcceptRequestByProviderId(req.params.providerId, function(err, acceptRequest) {
    if (err)
        res.send(err);
      res.json(acceptRequest);
  });
};

exports.get_accept_request_by_requestId = function (req, res) {
    AcceptRequest.getAcceptRequestByRequestId(req.params.requestId, function(err, acceptRequest) {
      if (err)
        res.send(err);
      res.json(acceptRequest);
  });
};

exports.deleted_accepted_request = function (req, res) {
  AcceptRequest.deleteAcceptedRequest(req.params.requestId, req.params.providerId, function(err, acceptRequest) {
      if (err)
        res.send(err);
      res.json(acceptRequest);
  });
};

exports.update_accept_request = function (req, res) {
  AcceptRequest.updateAcceptRequest(req.params.requestId, req.params.providerId, function(err, acceptRequest) {
    if (err)
      res.send(err);
    res.json(acceptRequest);
});
}

exports.get_all_accept_requests = function (req, res) {
    AcceptRequest.getAllAcceptRequests(function(err, acceptRequest) {
        if (err)
          res.send(err);
        res.json(acceptRequest);
    });
};

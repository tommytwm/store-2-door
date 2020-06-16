var Receiver = require('../models/Receiver');

exports.create_receiver = function(req, res) {
    var new_receiver = new Receiver(req.body);

    Receiver.createReceiver(new_receiver, function(err, receiver) {
        if (err)
          res.send(err);
        res.json(receiver);
    });
};

exports.get_receiver_by_id = function (req, res) {
    Receiver.getReceiverById(req.params.receiverId, function(err, receiver) {
        if (err)
          res.send(err);
        res.json(receiver);
    });
};

exports.get_all_receivers = function (req, res) {
    Receiver.getAllReceivers(function(err, receiver) {
        if (err)
          res.send(err);
        res.json(receiver);
    });
};

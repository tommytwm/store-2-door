var router = require('express').Router();
var acceptRequest = require('./acceptRequest');

router.use('/acceptRequest', acceptRequest);

module.exports = router;

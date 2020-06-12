var router = require('express').Router();
var example = require('./example');

router.use('/example', example);

module.exports = router;

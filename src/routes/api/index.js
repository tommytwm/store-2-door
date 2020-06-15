var router = require('express').Router();

var acceptRequest = require('./acceptRequest');
var admin = require('./admin');
var adminMonitors = require('./adminMonitors');
var containsItem = require('./containsItem');
var geoLocation = require('./geoLocation');
var item = require('./item');
var orderRequest = require('./orderRequest');
var provider = require('./provider');
var providerGoesTo = require('./providerGoesTo');
var rating = require('./rating');
var receiver = require('./receiver');
var store = require('./store');
var supplier = require('./supplier');
var user = require('./user');

router.use('/acceptRequest', acceptRequest);
router.use('/admin', admin);
router.use('/adminMonitors', adminMonitors);
router.use('/containsItem', containsItem);
router.use('/geoLocation', geoLocation);
router.use('/item', item);
router.use('/orderRequest', orderRequest);
router.use('/provider', provider);
router.use('/providerGoesTo', providerGoesTo);
router.use('/rating', rating);
router.use('/receiver', receiver);
router.use('/store', store);
router.use('/supplier', supplier);
router.use('/user', user);

module.exports = router;

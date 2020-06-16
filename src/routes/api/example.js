var router = require('express').Router();
var example = require('../../controllers/example');


router.get('/', example.get_all_examples);
router.get('/users', example.get_all_users);
router.post('/', example.create_example);

module.exports = router;

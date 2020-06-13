var router = require('express').Router();
var example = require('../../controllers/example');

router.get('/:exampleId', example.get_example_by_id);
router.get('/', example.get_all_examples);

router.post('/', example.create_example);

module.exports = router;

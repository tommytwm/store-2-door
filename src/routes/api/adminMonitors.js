var router = require('express').Router();
var adminMonitorsController = require('../../controllers/adminMonitorsController');

router.get('/:adminMonitorsId', adminMonitorsController.get_admin_monitors_by_id);
router.get('/', adminMonitorsController.get_all_admin_monitors);

router.post('/', adminMonitorsController.create_admin_monitors);

module.exports = router;

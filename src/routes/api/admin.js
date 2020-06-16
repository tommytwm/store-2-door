var router = require('express').Router();
var adminController = require('../../controllers/adminController');

router.get('/:adminId', adminController.get_admin_by_id);
router.get('/', adminController.get_all_admins);

router.post('/', adminController.create_admin);

module.exports = router;

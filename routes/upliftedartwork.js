var express = require('express');
const upliftedartwork_controlers= require('../controllers/upliftedartwork');
var router = express.Router();

/* GET detail upliftedartwork page */
router.get('/detail', upliftedartwork_controlers.upliftedartwork_view_one_Page);

router.get('/', upliftedartwork_controlers.upliftedartwork_view_all_Page );

// GET request for one upliftedartwork.
router.get('/upliftedartworks/:id', upliftedartwork_controlers.upliftedartwork_detail);

/* GET create upliftedartwork page */
router.get('/create', upliftedartwork_controlers.upliftedartwork_create_Page);

/* GET create update page */
router.get('/update', upliftedartwork_controlers.upliftedartwork_update_Page);

/* GET delete upliftedartwork page */
router.get('/delete', upliftedartwork_controlers.upliftedartwork_delete_Page);

module.exports = router;
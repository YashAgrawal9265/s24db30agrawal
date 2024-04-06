var express = require('express');
const upliftedartwork_controlers= require('../controllers/upliftedartwork');
var router = express.Router();

router.get('/', upliftedartwork_controlers.upliftedartwork_view_all_Page );

// GET request for one upliftedartwork.
router.get('/upliftedartworks/:id', upliftedartwork_controlers.upliftedartwork_detail);

module.exports = router;
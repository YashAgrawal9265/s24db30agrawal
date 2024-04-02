var express = require('express');
const upliftedartwork_controlers= require('../controllers/upliftedartwork');
var router = express.Router();

router.get('/', upliftedartwork_controlers.upliftedartwork_view_all_Page );

module.exports = router;
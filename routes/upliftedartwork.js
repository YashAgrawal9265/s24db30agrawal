var express = require('express');
var router = express.Router();

/* GET upliftedartwork page. */
router.get('/', function(req, res, next) {
  res.render('upliftedartwork', { title: 'Search Results - Uplifted Artwork' });
});

module.exports = router;
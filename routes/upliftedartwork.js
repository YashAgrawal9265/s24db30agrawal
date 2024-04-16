var express = require('express');
const upliftedartwork_controlers= require('../controllers/upliftedartwork');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET detail upliftedartwork page */
router.get('/detail', upliftedartwork_controlers.upliftedartwork_view_one_Page);

router.get('/', upliftedartwork_controlers.upliftedartwork_view_all_Page );

// GET request for one upliftedartwork.
router.get('/upliftedartworks/:id', upliftedartwork_controlers.upliftedartwork_detail);

/* GET create upliftedartwork page */
router.get('/create',secured, upliftedartwork_controlers.upliftedartwork_create_Page);

/* GET create update page */
router.get('/update', secured, upliftedartwork_controlers.upliftedartwork_update_Page);

/* GET delete upliftedartwork page */
router.get('/delete', secured, upliftedartwork_controlers.upliftedartwork_delete_Page);

module.exports = router;
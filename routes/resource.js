var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var upliftedartwork_controller = require('../controllers/upliftedartwork');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// upliftedartworks ROUTES ///
// POST request for creating a upliftedartworks.
router.post('/upliftedartworks', upliftedartwork_controller.upliftedartwork_create_post);
// DELETE request to delete upliftedartworks.
router.delete('/upliftedartworks/:id', upliftedartwork_controller.upliftedartwork_delete);
// PUT request to update upliftedartworks.
router.put('/upliftedartworks/:id', upliftedartwork_controller.upliftedartwork_update_put);
// GET request for one upliftedartworks.
router.get('/upliftedartworks/:id', upliftedartwork_controller.upliftedartwork_detail);
// GET request for list of all upliftedartworks items.
router.get('/upliftedartworks', upliftedartwork_controller.upliftedartwork_list);
module.exports = router;
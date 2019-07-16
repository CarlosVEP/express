var express = require('express');
var router = express.Router();
var tareasController = require('../controllers/tareasController.js');

/*
 * GET
 */
router.get('/', tareasController.list);

/*
 * GET
 */
router.get('/:id', tareasController.show);

/*
 * POST
 */
router.post('/', tareasController.create);

/*
 * PUT
 */
router.put('/:id', tareasController.update);

/*
 * DELETE
 */
router.delete('/:id', tareasController.remove);

module.exports = router;

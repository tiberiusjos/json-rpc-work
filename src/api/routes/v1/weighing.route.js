const express = require('express');
const controller = require('../../controllers/weighing.controller');

const router = express.Router();

router.param('weighingId', controller.get);

router.route('/')
 .get(controller.list);

router
  .route('/:id')
  .get(controller.get);

module.exports = router;
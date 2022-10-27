const express = require('express');
const controller = require('../../controllers/rpc.controller');

const router = express.Router();

router.route('/')
  .post(controller.callRPC);

module.exports = router;
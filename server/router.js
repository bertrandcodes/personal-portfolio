const router = require('express').Router();
const controller = require('./controller');

router
  .route('/contact')
  .post(controller.post)

module.exports = router
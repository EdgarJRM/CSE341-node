const routes = require('express').Router();
const controller = require('../controllers/index')

routes.get('/', controller.saraRouts);
routes.get('/emily', controller.emilyRoute);
routes.get('/hannah', controller.hannahRoute);

module.exports = routes;
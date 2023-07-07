const express = require('express');
const reactqueryController = require('../controller/reactqueryController');

const Router = express.Router();

Router.get('/foodList', reactqueryController.getFoodList);

Router.get('/studentList', reactqueryController.studentList);

module.exports = Router;
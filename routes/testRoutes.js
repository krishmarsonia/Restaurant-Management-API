const express = require('express');

const testController = require('../controller/testController');

const router = express();

router.post("/testUpdate", testController.updateTestFoodItem);

router.post('/posttestAdd', testController.testAddProducts);

router.post('/postTestUpdate', testController.testSingleAddProduct);

router.post("/postDeleteTestItem", testController.deleteFoodItem);

router.get("/getId", testController.generateId);

module.exports = router;
const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();

router.post("/newOrder", orderController.newOrder);

router.get("/getAllTables", orderController.fetchAllTables);

router.get("/getAllOrders/:TableId", orderController.getAllOrders);

router.post("/makePDF", orderController.sendPDF);

router.get("/getPDF", orderController.getFile)

module.exports = router;

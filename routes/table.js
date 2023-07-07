const express = require("express");
const tableController = require("../controller/tableController");

const router = express.Router();

router.post("/addTable", tableController.postNewTable);

module.exports = router;

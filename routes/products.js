const express = require("express");
const productController = require("../controller/productsController.js");

const router = express.Router();


router.post("/AddProduct", productController.postAddProducts);

router.get("/getAllProducts", productController.getAllProducts);

router.post("/updateProductName", productController.postUpdateProductName);

router.post("/deleteProducts", productController.deleteProduct);

router.post("/toggleProduct", productController.postStatusChange);

//---------------------Items--------------------------

router.post("/addItem", productController.addProductItems);

router.post("/deleteItem", productController.deleteItem);

router.post("/updateItem", productController.updateItem);

router.post("/itemStatusChange", productController.postStatusItemchange);
module.exports = router;

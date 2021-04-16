let express = require("express");
let router = express.Router(); //Router reference
let ProductController = require("../controller/product.controller.js");

//Mapping sub path with http methods
router.get("/allProductDetails", ProductController.getProductDetails);

module.exports = router;

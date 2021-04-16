let express = require("express");
let router = express.Router(); //Router reference
let ProductController = require("../controller/product.controller.js");

//Mapping sub path with http methods
router.get("/allProductDetails", ProductController.getProductDetails);
router.get("/retrieveProductById/:pid", ProductController.getProductById);
router.post("/storeProductDetails", ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid", ProductController.deleteProductById);
router.put("/updateProductPrice", ProductController.updateProductPrice);
module.exports = router;

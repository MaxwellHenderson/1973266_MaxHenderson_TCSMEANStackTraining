let ProductModel = require("../model/product.model.js");

//Retrieve all product details
let getProductDetails = (req, res) => {
  ProductModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

let getProductById = (req, res) => {
  let pid = req.params.pid;
  ProductModel.find({ _id: pid }, (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
};

let storeProductDetails = (req, res) => {
  let product = new ProductModel({
    _id: req.body.pid,
    pname: req.body.pname,
    price: req.body.price,
  });
  let newProduct = new ProductModel(product);
  newProduct.save((err, result) => {
    if (!err) {
      res.send("Record stored successfully " + result);
    } else {
      res.send("Record didn't store " + err);
    }
  });
};

let deleteProductById = (req, res) => {
  let pid = req.params.pid;
  ProductModel.deleteOne({ _id: pid }, (err, data) => {
    if (!err) {
      res.json(data);
    }
  });
};

module.exports = {
  getProductDetails,
  getProductById,
  storeProductDetails,
  deleteProductById,
};

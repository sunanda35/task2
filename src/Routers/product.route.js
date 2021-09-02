const Router = require("express").Router();
const productController = require("../Controller/product.controller");

Router.post("/add/product-category", productController.addProductCategory);

Router.post("/add/product", productController.addProduct);

Router.get("/get/categories", productController.getProductCategories);

Router.get("/get&length=:noOfProducts", productController.getProducts);

module.exports = Router;

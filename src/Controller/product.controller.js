const { product, productCategory } = require("../Config/mongodb.config");

module.exports = {
  addProductCategory: async (req, res, next) => {
    try {
      const { name } = req.body;
      const saveProductCategory = await productCategory.insertOne({ name });
      res.send(saveProductCategory);
    } catch (err) {
      next(err);
    }
  },
  addProduct: async (req, res, next) => {
    try {
      const category = req.body.productCategory;
      const price = req.body.totalSalesPrice_usd;
      var data = await product.insertOne({
        productCategory: category,
        totalSalesPrice_usd: price,
      });
      res.send(data);
    } catch (err) {
      next(err);
    }
  },
  getProductCategories: async (req, res, next) => {
    try {
      const categories = await productCategory.find().toArray();
      res.send(categories);
    } catch (err) {
      next(err);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const noOfProducts = req.params.noOfProducts;
      const products = await product
        .find()
        .sort({ totalSalesPrice_usd: -1 })
        .limit(parseInt(noOfProducts))
        .toArray();
      res.send(products);
    } catch (err) {
      next(err);
    }
  },
};

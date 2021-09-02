# api endpint:

- localhost:3000/api/add/product (post request) - add product
  {
  "productCategory":"(Product-category \_id)", "totalSalesPrice_usd":50
  }

- localhost:3000/api/add/product-category (post request) - add product category
  { "name": "category name" }

- localhost:3000/api//get&length=:noOfProducts (get) -fetch top 10 product

("noOfProduct" is the no of product output needed)

- localhost:3000/api/get/categories (get) - fetch categories

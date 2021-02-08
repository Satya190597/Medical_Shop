const express = require("express");
const { productRouteValidation } = require("../utility/route-validation");
const {
  GetAllProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/product");

const router = express.Router();

// [GET] - Create All Product.
router.get("/product/all", GetAllProduct);

// [POST] - Create Product.
router.post("/product/create", productRouteValidation(), CreateProduct);

// [PUT] - Update Product.
router.put("/product/update/:id", productRouteValidation(), UpdateProduct);

// [DELETE] - Delete Product.
router.delete("/product/delete/:id", DeleteProduct);

module.exports = router;

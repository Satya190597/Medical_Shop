const express = require("express");
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
router.post("/product/create", CreateProduct);

// [PUT] - Update Product.
router.put("/product/update/:id", UpdateProduct);

// [DELETE] - Delete Product.
router.delete("/product/delete/:id", DeleteProduct);

module.exports = router;

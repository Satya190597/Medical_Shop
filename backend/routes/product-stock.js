const express = require("express");
const { stockRouteValidation } = require("../utility/route-validation");
const {
  CreateProductStock,
  DeleteProductStock,
  UpdateProductStock,
  GetAllStock,
} = require("../controllers/product-stock");

const router = express.Router();

router.post("/stock/create", stockRouteValidation(), CreateProductStock);

router.get("/stock/all", GetAllStock);

router.put("/stock/update/:id", stockRouteValidation(), UpdateProductStock);

router.delete("/stock/delete/:id", DeleteProductStock);

module.exports = router;

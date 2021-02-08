const express = require("express");
const {categoryRouteValidation} = require("../utility/route-validation");
const {
  CreateCategory,
  DeleteCategory,
  UpdateCategory,
  GetAllCategory,
} = require("../controllers/category");

const router = express.Router();

// [GET] - Create All Category.
router.get("/category/all/", GetAllCategory);

// [POST] - Create Category.
router.post("/category/create/", categoryRouteValidation(), CreateCategory);

// [PUT] - Update Category.
router.put("/category/update/:id", categoryRouteValidation(), UpdateCategory);

// [DELETE] - Delete Category.
router.delete("/category/delete/:id", DeleteCategory);

module.exports = router;

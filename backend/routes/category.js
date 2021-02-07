const express = require("express");
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
router.post("/category/create/", CreateCategory);

// [PUT] - Update Category.
router.put("/category/update/:id", UpdateCategory);

// [DELETE] - Delete Category.
router.delete("/category/delete/:id", DeleteCategory);

module.exports = router;

const Category = require("../models/category");
const {validationResult} = require("express-validator");

// CONTROLLER - Create Category.
exports.CreateCategory = (request, response) => {
  
  // Check for validation result - in request.
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({error:errors.array()})
  }

  const category = new Category(request.body);
  Category.create(category, function (error, category) {
    return response.json(category);
  });
};

// CONTROLLER - Update Category.
exports.UpdateCategory = (request, response) => {

  // Check for validation result - in request.
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({error:errors.array()})
  }

  const categoryName = request.body.categoryName;
  const categoryId = request.params.id;
  Category.update(categoryId, categoryName, function (error, result) {
    return response.json(result);
  });
};

// CONTROLLER - Delete Category.
exports.DeleteCategory = (request, response) => {
  const categoryId = request.params.id;
  Category.delete(categoryId, function (error, result) {
    return response.json(result);
  });
};

// CONTROLLER - Get All Category.
exports.GetAllCategory = (request, response) => {
  Category.getAll(function (error, result) {
    return response.json(result);
  });
};

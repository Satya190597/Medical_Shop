const { response } = require("express");
const Category = require("../models/category");

// CONTROLLER - Create Category.
exports.CreateCategory = (request, response) => {
  const category = new Category({ CATEGORY_NAME: request.body.name });
  Category.create(category, function (error, category) {
    return response.json(category);
  });
};

// CONTROLLER - Update Category.
exports.UpdateCategory = (request, response) => {
  const categoryName = request.body.name;
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

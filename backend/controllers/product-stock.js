const ProductStock = require("../models/product-stock");
const { validationResult } = require("express-validator");

exports.CreateProductStock = (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ error: errors.array() });
  }
  const newStock = new ProductStock(request.body);
  ProductStock.create(newStock, function (error, result) {
    return response.json(result);
  });
};

exports.UpdateProductStock = (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ error: errors.array() });
  }
  const updatedStock = new ProductStock(request.body);
  const stockId = request.params.id;
  ProductStock.update(stockId, updatedStock, function (error, result) {
    return response.json(result);
  });
};

exports.DeleteProductStock = (request, response) => {
  const stockId = request.params.id;
  ProductStock.delete(stockId, function (error, result) {
    return response.json(result);
  });
};

exports.GetAllStock = (request, response) => {
  ProductStock.all(function (error, result) {
    return response.json(result);
  });
};

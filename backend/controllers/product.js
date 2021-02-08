const Product = require("../models/product");

// CONTROLLER - Create Product.
exports.CreateProduct = function (request, response) {
  const newProduct = new Product(request.body);
  Product.create(newProduct, function (error, result) {
    return response.json(result);
  });
};

// CONTROLLER - Delete Product.
exports.DeleteProduct = function (request, response) {
  const productId = request.params.id;
  Product.delete(productId, function (error, result) {
    return response.json(result);
  });
};

// CONTROLLER - Update Product.
exports.UpdateProduct = function (request, response) {
  const updatedProduct = new Product(request.body);
  const productId = request.params.id;
  Product.update(productId, updatedProduct, function (error, result) {
    return response.json(result);
  });
};

// CONTROLLER - Get All Product.
exports.GetAllProduct = function (request,response) {
    Product.all(function(error,result){
        return response.json(result);
    })
}
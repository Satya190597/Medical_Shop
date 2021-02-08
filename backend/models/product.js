const mysql = require("../utility/database-connection");

const Product = function (product) {
  this.PRODUCT_NAME = product.productName;
  this.PRODUCT_USES = product.productUses;
  this.PRODUCT_DESCRIPTION = product.productDescription;
  this.PRODUCT_COMPANY_NAME = product.productCompanyName;
  this.PRODUCT_PRICE = product.productPrice;
  this.PRODUCT_DISCOUNT = product.productDiscount;
  this.PRODUCT_LOCATION_IN_STORE = product.productLocationInStore;
  this.DATE_OF_VALIDITY = product.dateOfValidity;
  this.PRODUCT_CATEGORY_ID = product.productCategoryId;
};

/**
 * [Create method] - accept new product object as a parameter.
 */
Product.create = function (newProduct, result) {
  const sql = "INSERT INTO PRODUCT SET ?";
  mysql.query(sql, newProduct, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Delete method] - accept product id as a parameter.
 */
Product.delete = function (productId, result) {
  const sql = "DELETE FROM PRODUCT WHERE PRODUCT_ID = ?";
  mysql.query(sql, [productId], function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Update method] - accept product id and product detail as a parameter.
 */
Product.update = function (productId, productDetail, result) {
  const sql = "UPDATE PRODUCT SET ? WHERE PRODUCT_ID = ?";
  mysql.query(sql, [productDetail, productId], function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Get All Product]
 */
Product.all = function (result) {
  const sql = "SELECT * FROM PRODUCT";
  mysql.query(sql, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

module.exports = Product;

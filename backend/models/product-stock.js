const mysql = require("../utility/database-connection");

const ProductStock = function (productStock) {
  this.PRODUCT_ID = productStock.productId;
  this.PRODUCT_QUANTITY = productStock.productQuantity;
};

ProductStock.create = function (newStock, result) {
  const sql = "INSERT INTO PRODUCT_STOCK SET ?";
  mysql.query(sql, newStock, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

ProductStock.delete = function (stockId, result) {
  const sql = "DELETE FROM PRODUCT_STOCK WHERE PRODUCT_STOCK_ID = ?";
  mysql.query(sql, stockId, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

ProductStock.update = function (stockId, newStock, result) {
  const sql = "UPDATE PRODUCT_STOCK SET ? WHERE PRODUCT_STOCK_ID = ?";
  mysql.query(sql, [newStock, stockId], function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

ProductStock.all = function (result) {
  const sql = `SELECT 
  A.PRODUCT_STOCK_ID,
  A.PRODUCT_ID,
  A.PRODUCT_QUANTITY,
  B.PRODUCT_NAME,
  B.PRODUCT_USES,
  B.PRODUCT_DESCRIPTION,
  B.PRODUCT_COMPANY_NAME,
  B.PRODUCT_PRICE,
  B.PRODUCT_DISCOUNT,
  B.PRODUCT_LOCATION_IN_STORE,
  B.DATE_OF_VALIDITY,
  C.CATEGORY_ID,
  C.CATEGORY_NAME
  FROM PRODUCT_STOCK A, PRODUCT B, CATEGORY C
  WHERE
  A.PRODUCT_ID = B.PRODUCT_ID AND 
  B.PRODUCT_CATEGORY_ID = C.CATEGORY_ID;`;
  mysql.query(sql, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

module.exports = ProductStock;

const mysql = require("../utility/database-connection");

const Category = function (category) {
  this.CATEGORY_NAME = category.CATEGORY_NAME;
};

/**
 * [Create method] - accept new category object as a parameter.
 */
Category.create = function (newCategory, result) {
  const sql = "INSERT INTO CATEGORY SET ?";
  mysql.query(sql, newCategory, function (error, response) {
    if (error) {
      console.log("ERROR");
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Delete method] - accept category id as a parameter.
 */
Category.delete = function (categoryId, result) {
  const sql = "DELETE FROM CATEGORY WHERE CATEGORY_ID = ?";
  mysql.query(sql, [categoryId], function (error, response) {
    if (error) {
      console.log("ERROR");
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Update method] - accept category id and category name as a parameter.
 */
Category.update = function (categoryId, categoryName, result) {
  const sql = "UPDATE CATEGORY SET CATEGORY_NAME = ? WHERE CATEGORY_ID = ?";
  mysql.query(sql, [categoryName, categoryId], function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

/**
 * [Get All Method]
 */
Category.getAll = function (result) {
  const sql = "SELECT * FROM CATEGORY ORDER BY CATEGORY_NAME";
  mysql.query(sql, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

module.exports = Category;

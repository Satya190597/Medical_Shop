const mysql = require("../utility/database-connection");

const Bill = function (newBill) {
  this.CUSTOMER_NAME = newBill.customerName;
  this.CUSTOMER_CONTACT = newBill.customerContact;
  this.CUSTOMER_PAYMENT_MODE = newBill.customerPaymentMode;
  this.CUSTOMER_TOTAL_AMOUNT = newBill.customerTotalAmount;
  this.CUSTOMER_PAID_AMOUNT = newBill.customerPaidAmount;
};

Bill.create = (newBill, result) => {
  const sql = "INSERT INTO BILL SET ?";
  mysql.query(sql, newBill, function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

Bill.delete = (billId, result) => {
  const sql = "DELETE FROM BILL WHERE BILL_ID = ?";
  mysql.query(sql, [billId], function (error, response) {
    if (error) {
      result(error, null);
    } else {
      result(null, response);
    }
  });
};

Bill.update = (billId, updatedBill, result) => {
  const sql = "UPDATE BILL SET = ? WHERE BILL_ID = ?";
  mysql.query(sql, [updatedBill, billId], function (error, result) {
    if (error) {
      result(error, null);
    } else {
      result(null, error);
    }
  });
};

module.exports = Bill;

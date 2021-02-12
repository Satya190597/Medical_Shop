const Bill = require("../models/bill");

exports.CreateBill = (request, response) => {
  const newBill = Bill(request.body);
  Bill.create(newBill, function (error, result) {
    if (error) {
      return response.json(error);
    }
    return response.json(result);
  });
};

exports.DeleteBill = (request, response) => {
  const billId = request.params.id;
  Bill.delete(billId, function (error, result) {
    if (error) {
      return response.json(error);
    }
    return response.json(result);
  });
};

exports.UpdateBill = (request, response) => {
  const billId = request.params.id;
  const updatedBill = request.body;
  Bill.update(billId, updatedBill, function (error, result) {
    if (error) {
      return response.json(error);
    }
    return response.json(result);
  });
};

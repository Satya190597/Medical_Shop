const express = require("express");

const { CreateBill, UpdateBill, DeleteBill } = require("../controllers/bill");

const router = express.Router();

router.post("/bill/create", CreateBill);
router.put("/bill/update/:id", UpdateBill);
router.delete("/bill/delete/:id", DeleteBill);

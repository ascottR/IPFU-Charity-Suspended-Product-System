const express = require("express");
const router = express.Router();
const paymentsController = require("../controller/paymentsController");


router.post("pay/add", paymentsController.addPayment);

router.get("pay/", paymentsController.getAllPayments);

router.get("pay/get/:id", paymentsController.getPaymentById);

module.exports = router;

const express = require("express");
const router = express.Router();
const Receiver = require("../models/Receiver");
const ReceiverController = require("../controllers/ReceiverController");

router.get("/", ReceiverController.getAllReceiver);
router.get("/get/:id",ReceiverController.getReceiverById);
router.post("/add", ReceiverController.addReceiver);
router.put("/update/:id", ReceiverController.updateReceiver);
router.delete("/delete/:id", ReceiverController.deleteReceiver);

module.exports = router;
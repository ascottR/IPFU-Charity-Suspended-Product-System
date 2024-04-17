const express = require("express");
const router = express.Router();
const eventsController = require("../controller/eventsController");

router.route("/add").post(eventsController.addEvent);

router.route("/").get(eventsController.getAllEvents);

router.route("/update/:id").put(eventsController.updateEvent);

router.route("/delete/:id").delete(eventsController.deleteEvent);

router.route("/get/:id").get(eventsController.getEventById);

module.exports = router;

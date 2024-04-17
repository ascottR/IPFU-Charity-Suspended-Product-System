const Event = require("../models/Event");

exports.addEvent = (req, res) => {
    const { name, image, description, date, location } = req.body;

    const newEvent = new Event({
        name,
        image,
        description,
        date,
        location
    });

    newEvent.save()
        .then(() => {
            res.json("Event added");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getAllEvents = (req, res) => {
    Event.find()
        .then((events) => {
            res.json(events);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.updateEvent = async (req, res) => {
    const eventId = req.params.id;
    const { name, image, description, date, location } = req.body;

    const updateEvent = {
        name,
        image,
        description,
        date,
        location
    };

    try {
        await Event.findByIdAndUpdate(eventId, updateEvent);
        res.status(200).send({ status: "Event Updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error with updating", error: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    const eventId = req.params.id;
    try {
        await Event.findByIdAndDelete(eventId);
        res.status(200).send({ status: "Event deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting", error: err.message });
    }
};

exports.getEventById = async (req, res) => {
    const eventId = req.params.id;
    try {
        const event = await Event.findById(eventId);
        res.status(200).send({ status: "event fetch", event });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "error with get event", error: err.message });
    }
};

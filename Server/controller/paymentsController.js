const Event = require("../models/Payment");

exports.addPayment = (req, res) => {
    const { name,number, price,date,cvv } = req.body;

    const newPayment = new Payment({
        name,
        number,
        price,
        date,
        cvv
    });

    newPayment.save()
        .then(() => {
            res.json("Payment added");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getAllPayments = (req, res) => {
    Payment.find()
        .then((payments) => {
            res.json(Payments);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.updatePayment = async (req, res) => {
    const paymentId = req.params.id;
    const { name,number, price,date,cvv} = req.body;

    const updateEvent = {
        name,
        number,
        price,
        date,
        cvv
    };

    try {
        await Event.findByIdAndUpdate(paymentId, updatePayment);
        res.status(200).send({ status: "payment Updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error with updating", error: err.message });
    }
};

exports.deletePayment = async (req, res) => {
    const PaymentId = req.params.id;
    try {
        await Payment.findByIdAndDelete(paymentId);
        res.status(200).send({ status: "payment deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting", error: err.message });
    }
};

exports.getPaymentById = async (req, res) => {
    const eventId = req.params.id;
    try {
        const event = await Payment.findById(paymentIs);
        res.status(200).send({ status: "payment fetch", event });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "error with get payment", error: err.message });
    }
};

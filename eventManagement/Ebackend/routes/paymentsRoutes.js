const router = require("express").Router();
const Payment = require("../models/Payment");

// Create Payment
router.route("/add").post((req, res) => {
    const { cardno, cardholder, date, cvv } = req.body;
    const newPayment = new Payment({
        CardNo: cardno,
        Cardholder: cardholder,
        date: date,
        cvv: cvv
    });

    newPayment.save()
        .then(() => res.json("Payment successful!"))
        .catch(err => res.status(400).json("Error: " + err));
});

// Read Payments
router.route("/payment").get((req, res) => {
    Payment.find()
        .then(payments => res.json(payments))
        .catch(err => res.status(400).json("Error: " + err));
});

/*fetch one event details*/
router.route("/get/:id").get(async(req,res)=>{
    let eventId = req.params.id;
    const payment = await Payment.findById(paymentId)
    .then((payment)=>{
        res.status(200).send({status:"payment fetch",payment});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"error with get event",error:err.message});
    })
})


module.exports = router;

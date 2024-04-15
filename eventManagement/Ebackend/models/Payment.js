const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    CardNo: {
        type: Number, 
        required: true
    },
    Cardholder : {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    cvv: {
        type: Number, 
        required: true
    }
});

// Define the payment model
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;

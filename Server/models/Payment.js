const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    
});

// Define the Event model
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;

const mongoose = require("mongoose");

const claimsSchema = new mongoose.Schema({
    product: String, 
    date: Date,
    name: String,
    phoneNo: String
});

const Claim = mongoose.model('Claim', claimsSchema);

module.exports = Claim;
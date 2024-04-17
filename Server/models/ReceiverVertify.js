const mongoose = require("mongoose");

const ReceiverSchema = new mongoose.Schema({
    income: {
    type: String,
    required: true,
  },
  financialChallenges: {
    type: String,
    required: true,
  },
  dependents: {
    type: String,
    required: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  unemploymentDuration: {
    type: String,
  },
  supportReceived:{
    type:String,
    required:true
  },
  challengesAccessingProducts:{
    type:String,
    required:true
  }
});

const Receiver = mongoose.model("Vertify", ReceiverSchema);
module.exports = Receiver;

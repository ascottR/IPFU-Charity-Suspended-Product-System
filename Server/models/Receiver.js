const mongoose = require("mongoose");

const ReceiverSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

const Receiver = mongoose.model("Receiver", ReceiverSchema);
module.exports = Receiver;

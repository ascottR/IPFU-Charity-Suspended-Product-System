const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackschema = new Schema(

    {
      Name: String,
      email:String,
      Feedback: String,

    }
);

const requestschema = new Schema(

  {
    Name: String,
    email:String,
    Request: String,

  }
);

const replyschema = new Schema(

{
  Name: String,
  email:String,
  Request: String,
  Reply : String,
}

)

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackschema);
const Request = mongoose.models.Request || mongoose.model('Request', requestschema);
const Reply = mongoose.models.Reply || mongoose.model('Reply', replyschema);


module.exports = { Feedback, Request,Reply };
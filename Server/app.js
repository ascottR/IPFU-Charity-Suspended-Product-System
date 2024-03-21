const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use("/", (req, res, next) => {
  res.send("It is working");
});

mongoose
  .connect(
    "mongodb+srv://tehan:<ZmgUHJ5g8bDgOODm>@cluster0.hbb4nup.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

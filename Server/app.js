const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/ReceiverRoutes");
require("dotenv").config();
PORT = process.env.PORT || 8070;
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/receiver", router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/CommunicationRoutes');
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

  app.use('/api', router);
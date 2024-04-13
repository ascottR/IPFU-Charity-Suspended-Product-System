const express = require("express");
const mongoose = require("mongoose");
const router2 = require("./routes/ReceiverRoutes");
const router = require("./routes/ProductRoutes");
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/products", router);
app.use("/receiver", router2);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
const express = require("express");
const mongoose = require("mongoose");
//const router2 = require("./routes/ReceiverRoutes");
const router = require("./routes/ProductRoutes");
const claimsRouter = require("./routes/ClaimsRoutes");
const cors = require("cors");
require("dotenv").config();
PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/products", router);
app.use("/claims",claimsRouter)

mongoose
  // .connect(process.env.MONGODB_URI)
  .connect("mongodb+srv://thiloksha25:EqFgBHZUEF8JxWzd@receiver.cbsy44e.mongodb.net/?retryWrites=true&w=majority&appName=Receiver")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

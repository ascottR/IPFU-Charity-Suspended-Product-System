const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

// Routes
const eventRouter = require("./routes/eventsRoutes");
app.use("/event", eventRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});


//image upload
const multer = require('multer')






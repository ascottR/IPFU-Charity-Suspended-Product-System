
let Receiver = require("../models/Receiver");

//add receiver
exports.addReceiver = async (req, res, next) => {
    try {
      // Check if req.body exists and contains the expected properties
      if (
        !req.body ||
        !req.body.fname ||
        !req.body.lname ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.username ||
        !req.body.password
        
      ) {
        return res
          .status(400)
          .json({ message: "Missing required fields in the request body" });
      }
  
      const fname = req.body.fname;
      const lname = req.body.lname;
      const email = req.body.email;
      const phone = req.body.phone;
      const image = req.body.image;
      const username = req.body.username;
      const password = req.body.password;
  
      
      const newReceiver = new Receiver({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        image: image,
        username:username,
        password:password

      });
      await newReceiver.save();
      return res.status(201).json({ message: "Receiver added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

// Function to get all ReceiverDetails
exports.getAllReceiver = async (req, res, next) => {
  try {
    let receiver = await Receiver.find();
    if (receiver.length === 0) {
      return res
        .status(404)
        .json({ message: "No Receivers available." });
    }
    return res.status(200).json({ receiver });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to get a single receiver by ID
exports.getReceiverById = async (req, res, next) => {
  try {
    // Extract the receiver ID from the URL parameters
    const receiverId = req.params.id;

    // Find the Receiver by ID
    const receiver = await Receiver.findById(receiverId);

    // Check if the Receiver exists
    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    // If the Receiver exists, return it
    return res.status(200).json({ receiver });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to update a Receiver
exports.updateReceiver = async (req, res, next) => {
  try {
    const receiverId = req.params.id;
    const { fname,lname,email,phone,image,username,password } = req.body;

    const updatedReceiver = {
      fname,
      lname,
      email,
      phone,
      image,
      username,
      password
    };

    const updatedReceiverDocument = await Receiver.findByIdAndUpdate(
      receiverId,
      updatedReceiver,
      { new: true }
    );

    if (!updatedReceiverDocument) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Receiver updated successfully",
      product: updatedReceiverDocument,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to delete a Receiver
exports.deleteReceiver = async (req, res, next) => {
  try {
    // Extract the Receiver ID from the URL parameters
    const receiverId = req.params.id;

    // Find the Receiver and delete it
    const deletedReceiver = await Receiver.findOneAndDelete({ _id: receiverId });

    // Check if the Receiver exists and was successfully deleted
    if (!deletedReceiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    // Delete the image file from the server's file system
    fs.unlinkSync(deletedReceiver.image);

    return res.status(200).json({
      message: "Receiver deleted successfully",
      receiver: deletedReceiver,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
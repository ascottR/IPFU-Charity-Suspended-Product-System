const ShopProfile = require("../models/ShopProfile");
const fs = require("fs");
const mongoose = require("mongoose");

// Function to get all Shop Profiles
exports.getAllShopProfiles = async (req, res, next) => {
  try {
    let shopProfiles = await ShopProfile.find();
    if (shopProfiles.length === 0) {
      return res.status(404).json({ message: "No Shops are available." });
    }
    return res.status(200).json({ shopProfiles });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to get a single Shop Profile by ID
exports.getShopProfileById = async (req, res, next) => {
  try {
    // Extract the Shop Profile ID from the URL parameters
    const shopProfileId = req.params.id;

    // Find the Shop Profile by ID
    const shopProfile = await ShopProfile.findById(shopProfileId);

    // Check if the Shop Profile exists
    if (!shopProfile) {
      return res.status(404).json({ message: "Shop Profile not found" });
    }

    // If the Shop Profile exists, return it
    return res.status(200).json({ shopProfile });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to add a new Shop Profile
exports.addShopProfile = async (req, res, next) => {
  try {
    // Check if req.body exists and contains the expected properties
    if (
      !req.body ||
      !req.body.shopName ||
      !req.body.owner ||
      !req.body.password ||
      !req.body.location ||
      !req.body.contact.email ||
      !req.body.contact.phone
    ) {
      return res
        .status(400)
        .json({ message: "Missing required fields in the request body" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { shopName, description, owner, password, location, contact } =
      req.body;

    const shopProfileImageURL = req.file.path;

    const newShopProfile = new ShopProfile({
      shopName,
      description,
      owner,
      password,
      location,
      contact: {
        email: contact.email,
        phone: contact.phone,
      },
      shopProfileImageURL,
    });
    await newShopProfile.save();

    return res
      .status(201)
      .json({ message: "Shop Profile created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to update a Shop Profile
exports.updateShopProfile = async (req, res, next) => {
  try {
    const shopProfileId = req.params.id;
    const { shopName, description, owner, location, contact } = req.body;

    const updatedShopProfile = {
      shopName,
      description,
      owner,
      location,
      contact,
    };

    const updatedShopProfileDocument = await ShopProfile.findByIdAndUpdate(
      shopProfileId,
      updatedShopProfile,
      { new: true }
    );

    if (!updatedShopProfileDocument) {
      return res.status(404).json({ message: "Shop Profile not found" });
    }

    return res.status(200).json({
      message: "Shop Profile updated successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to delete a Shop Profile
exports.deleteShopProfile = async (req, res, next) => {
  try {
    // Extract the Shop Profile ID from the URL parameters
    const shopProfileId = req.params.id;

    // Find the Shop Profile and delete it
    const deletedShopProfile = await ShopProfile.findOneAndDelete({
      _id: shopProfileId,
    });

    // Check if the Shop Profile exists and was successfully deleted
    if (!deletedShopProfile) {
      return res.status(404).json({ message: "Shop Profile not found" });
    }

    // Delete the image file from the server's file system
    fs.unlinkSync(deletedShopProfile.shopProfileImageURL);

    return res.status(200).json({
      message: "Shop Profile deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

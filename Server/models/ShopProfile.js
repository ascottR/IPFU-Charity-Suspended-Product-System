const mongoose = require("mongoose");

const ShopProfileSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "This is a sample shop description.",
    },
    owner: {
      type: String,
      //mongoose.Schema.Types.ObjectId,
      //ref: "ShopOwner", //shop owner id
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    contact: {
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      //contact info and social media link goes here
    },

    shopProfileImageURL: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", //products related to the shop
      },
    ],
    active: {
      type: Boolean,
      default: false, //shop is default inactive IPFU manager need to active it
    },
  },
  { timestamps: true }
);

const ShopProfile = mongoose.model("ShopProfile", ShopProfileSchema);

module.exports = ShopProfile;

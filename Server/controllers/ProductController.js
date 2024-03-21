const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    console.log(err);
  }

  //not found
  if (!products) {
    return res
      .status(404)
      .json({ message: "No Product available in Inventory." });
  }

  //Display all products
  return res.status(200).json({ products });
};

exports.getAllProducts = getAllProducts;

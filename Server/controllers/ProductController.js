const Product = require("../models/Product");
const fs = require("fs");

// Function to get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.find();
    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products available in inventory." });
    }
    return res.status(200).json({ products });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to get a single product by ID
exports.getProductById = async (req, res, next) => {
  try {
    // Extract the product ID from the URL parameters
    const productId = req.params.id;

    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If the product exists, return it
    return res.status(200).json({ product });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to add a new product
exports.addProduct = async (req, res, next) => {
  try {
    // Check if req.body exists and contains the expected properties
    if (
      !req.body ||
      !req.body.name ||
      !req.body.code ||
      !req.body.price ||
      !req.body.quantity
    ) {
      return res
        .status(400)
        .json({ message: "Missing required fields in the request body" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const name = req.body.name;
    const code = req.body.code;
    const price = req.body.price;
    const quantity = parseInt(req.body.quantity);
    const image = req.file.path;

    const newProduct = new Product({
      name: name,
      code: code,
      price: price,
      quantity: quantity,
      image: image,
    });
    await newProduct.save();
    return res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to add a new product
exports.addProduct = async (req, res, next) => {
  try {
    // Check if req.body exists and contains the expected properties
    if (
      !req.body ||
      !req.body.name ||
      !req.body.code ||
      !req.body.price ||
      !req.body.quantity
    ) {
      return res
        .status(400)
        .json({ message: "Missing required fields in the request body" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const name = req.body.name;
    const code = req.body.code;
    const price = req.body.price;
    const quantity = parseInt(req.body.quantity);
    const image = req.file.path;

    const newProduct = new Product({
      name: name,
      code: code,
      price: price,
      quantity: quantity,
      image: image,
    });
    await newProduct.save();

    return res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to update a product
exports.updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { name, code, price, quantity, image } = req.body;

    const updatedProduct = {
      name,
      code,
      price,
      quantity,
      image,
    };

    const updatedProductDocument = await Product.findByIdAndUpdate(
      productId,
      updatedProduct,
      { new: true }
    );

    if (!updatedProductDocument) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      //product: updatedProductDocument,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Function to delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    // Extract the product ID from the URL parameters
    const productId = req.params.id;

    // // Validate the product ID (optional, but recommended)
    // if (!mongoose.Types.ObjectId.isValid(productId)) {
    //   return res.status(400).json({ message: "Invalid product ID" });
    // }

    // Find the product and delete it
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });

    // Check if the product exists and was successfully deleted
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the image file from the server's file system
    fs.unlinkSync(deletedProduct.image);

    return res.status(200).json({
      message: "Product deleted successfully",
      //product: deletedProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

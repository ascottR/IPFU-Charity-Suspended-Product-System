const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getAllProducts);
router.post("/add", ProductController.addProduct);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;

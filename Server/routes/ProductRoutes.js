const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const ProductController = require("../controllers/ProductController");
const multer = require("multer");

//multer middlware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });

//routes
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/add", upload.single("image"), ProductController.addProduct);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;

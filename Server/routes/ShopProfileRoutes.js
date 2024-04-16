const express = require("express");
const shopProfileRouter = express.Router();
const ShopProfileController = require("../controllers/ShopProfileController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

shopProfileRouter.get("/", ShopProfileController.getAllShopProfiles);
shopProfileRouter.get("/:id", ShopProfileController.getShopProfileById);
shopProfileRouter.post(
  "/add",
  upload.single("shopProfileImageURL"),
  ShopProfileController.addShopProfile
);
shopProfileRouter.put("/update/:id", ShopProfileController.updateShopProfile);
shopProfileRouter.delete(
  "/delete/:id",
  ShopProfileController.deleteShopProfile
);

module.exports = shopProfileRouter;

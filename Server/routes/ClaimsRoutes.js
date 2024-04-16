const express = require("express");
const router = express.Router();
const claimsController = require("../controllers/claimsController");

//routes
router.get("/",claimsController.getAllClaims);
router.post("/",claimsController.createClaim);
router.put("/:id", claimsController.updateClaim);
router.delete("/:id",claimsController.deleteClaim);
router.get("/count", claimsController.getClaimsCount);

module.exports = router;

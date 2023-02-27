const express = require("express");
const router = express.Router();
const userController = require("../controllers/product.controllers");
router.get("/", userController.getAll);
router.post("/post", userController.post);
router.get("/:productId", userController.getSingle);

module.exports = router;
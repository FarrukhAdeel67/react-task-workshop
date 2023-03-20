const express = require("express");
const router = express.Router();
const productRouter = require("../routes/product.routes")
const userRouter = require("../routes/user.routes")
router.use('/users', userRouter);
router.use("/products", productRouter);

module.exports = router;
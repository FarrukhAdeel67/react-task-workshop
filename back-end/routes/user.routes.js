const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers")
const authenticateUser = require("../middleware/authenticate_user")
router.post("/signUp", userController.signUp)
router.post("/logIn", userController.logIn);
router.get("/getAll", userController.getAll)
router.get("/:userId/isUserAuth", authenticateUser, (req, res) => {
    res.send("successfully auth")
})
module.exports = router;
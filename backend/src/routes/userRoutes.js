const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();
router.use(express.json());

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.post("/login", userController.getLoginUser);

module.exports = router;

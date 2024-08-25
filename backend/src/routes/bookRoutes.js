const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

router.post("/", bookController.createBook);

module.exports = router;

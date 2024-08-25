const express = require("express");
const memberController = require("../controller/memberController");

const router = express.Router();

router.post("/", memberController.createMember);
router.get("/", memberController.getAllMembers);

module.exports = router;

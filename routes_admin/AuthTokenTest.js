const express = require('express');
const router = express.Router();

const authAdmin = require("../middleware/authAdmin");
const login = require("../controller/login");

router.get("/", authAdmin, login.testAdmin);

module.exports = router;
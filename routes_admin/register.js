const express = require('express');
const router = express.Router();

const authAdmin = require("../middleware/authAdmin");
const registeradmin = require("../controller_admin/register");

router.post("/", authAdmin, registeradmin.register);

module.exports = router
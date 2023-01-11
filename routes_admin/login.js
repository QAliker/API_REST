const express = require('express');
const router = express.Router();


const loginadmin = require("../controller_admin/login");

router.post("/", loginadmin.loginadmin);

module.exports = router
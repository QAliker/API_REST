const express = require('express');
const router = express.Router();

const authAdmin = require("../middleware/authAdmin");
const Adminupdate = require("../controller_admin/update");
const adminadminUpdate = require('../controller_admin/update');

router.put("/", authAdmin, Adminupdate.updateAdmin);
router.put("/ad", authAdmin, adminadminUpdate.updateAdmin )

module.exports = router
const express = require('express');
const router = express.Router();

const authAdmin = require("../middleware/authAdmin");
const adminAdminUsers = require('../controller_admin/users');
const adminUsers = require('../controller_admin/usersAdmin');



router.get("/", authAdmin, adminAdminUsers.adminUsers);
router.get("/ad", authAdmin, adminUsers.adminAdminGetAll)

module.exports = router
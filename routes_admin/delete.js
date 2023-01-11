const express = require('express');
const router = express.Router();

const authAdmin = require("../middleware/authAdmin");
const Admindelete = require("../controller_admin/delete");
const deleteAdmin = require("../controller_admin/deleteAdmin")

router.delete("/", authAdmin, Admindelete.delete);
router.delete("/ad", authAdmin, deleteAdmin.deleteAdmin)

module.exports = router
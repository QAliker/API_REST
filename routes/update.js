const express = require('express');
const router = express.Router();

const update = require("../controller/update");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");


router.put("/", auth, update.update);
router.put("/auth", authAdmin, update.update)
router.put("/update", auth, update.updateProducts)

module.exports = router
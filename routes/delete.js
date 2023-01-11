const express = require('express');
const router = express.Router();

const del = require("../controller/delete");
const auth = require("../middleware/auth");

router.delete("/", auth, del.delete);
router.delete("/delete", auth, del.deleteProducts)


module.exports = router
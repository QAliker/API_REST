const express = require('express');
const router = express.Router();

const me= require("../controller/me");
const auth = require("../middleware/auth");

router.get("/", auth,me.me);

module.exports = router
const express = require('express');
const router = express.Router();

const create = require("../controller/create");
const auth = require("../middleware/auth");

router.post("/", auth, create.create);

module.exports = router
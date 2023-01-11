const express = require('express');
const router = express.Router();

const login = require("../controller/login");
const auth = require("../middleware/auth");


router.post("/", login.login);
router.get("/", auth, login.test);


module.exports = router;
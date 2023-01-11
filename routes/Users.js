const express = require('express');
const router = express.Router();


const postsController = require("../controller/Users");



router.get("/", postsController.getAll);

module.exports = router

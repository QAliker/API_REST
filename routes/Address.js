const express = require('express');
const router = express.Router();

const createAdress = require("../controller/Address");
const auth = require("../middleware/auth");

router.post("/", auth, createAdress.createAddress);
router.get("/", auth, createAdress.getAddress)
router.get("/:id", auth, createAdress.getAddressById)
router.put("/:id", auth, createAdress.UpdateAddressById)
router.delete("/:id", auth, createAdress.deleteById)

module.exports = router
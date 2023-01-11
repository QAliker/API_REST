const express = require('express');
const router = express.Router();

const products = require("../controller/products");
const auth = require("../middleware/auth");

router.get("/", auth, products.getProductsByName);
router.get("/allproducts", products.getAllProducts);
router.get("/userproducts", products.getProductsByUsername)

module.exports = router
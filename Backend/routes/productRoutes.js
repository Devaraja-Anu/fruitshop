const { Router } = require("express");
const productController = require("../controllers/productControllers");

const router = Router();

router.post("/products", productController.product_post);
router.get("/products", productController.product_get);


module.exports = router;
const express = require("express")
const { getProducts, newProducts, getProductById, updateProductById, deleteProductById } = require("../controller/productsController")

const router = express.Router()

router.route("/products").get(getProducts)
router.route("/admin/products").post(newProducts)
router.route("/product/:id").get(getProductById)
router.route("/product/:id").put(updateProductById)
router.route("/product/:id").delete(deleteProductById)



module.exports = router
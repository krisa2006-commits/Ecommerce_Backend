const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getMyProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getAllProducts);

router.get("/my-products", authMiddleware, getMyProducts);

router.get("/:id", getSingleProduct);

router.post("/", authMiddleware, addProduct);

router.put("/:id", authMiddleware, updateProduct);

router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;

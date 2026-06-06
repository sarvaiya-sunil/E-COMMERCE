import express from "express";
import {
  createProducts,
  deleteProducts,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProducts,
} from "../controllers/product-controller.js";
import { adminRoute, protectRoute } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProducts);
router.patch("/featured/:id", protectRoute, adminRoute, toggleFeaturedProducts);
router.delete("/:id", protectRoute, adminRoute, deleteProducts);

export default router;

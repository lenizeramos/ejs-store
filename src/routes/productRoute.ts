import { Router } from "express";
import { requireAuth, extendSession } from "../middleware/session";
import { getProductsList } from "../controllers/productController";

const router = Router();

router.get("/products", requireAuth, extendSession, getProductsList);

export default router;

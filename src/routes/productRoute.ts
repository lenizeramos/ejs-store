import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { extendSession } from "../middleware/extendSession";
import { getProductsList } from "../controllers/productController";

const router = Router();

router.get("/products", requireAuth, extendSession, getProductsList);

export default router;

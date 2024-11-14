import { Router } from "express";
import { getCartInfo } from "../controllers/cartController";
import { requireAuth } from "../middleware/requireAuth";
import { extendSession } from "../middleware/extendSession";

const router = Router();

router.get("/cart", requireAuth, extendSession,getCartInfo);

export default router;
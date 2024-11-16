import { Router } from "express";
import { checkout } from "../controllers/checkoutController";
import { extendSession, requireAuth } from "../middleware/session";

const router = Router();

router.get("/cart/checkout",requireAuth, extendSession, checkout);

export default router;
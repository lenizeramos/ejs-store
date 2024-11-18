/* import { Router } from "express";
import { checkout, checkoutSuccess } from "../controllers/checkoutController";
import { extendSession, requireAuth } from "../middleware/session";

const router = Router();

router.get("/cart/checkout",requireAuth, extendSession, checkout);
router.get("/cart/checkout/checkoutSuccess",requireAuth, extendSession, checkoutSuccess);

export default router; */
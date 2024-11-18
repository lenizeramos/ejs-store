import { Router } from "express";
import { getCartInfo, addToCart, removeFromCart, updateCart} from "../controllers/cartController";
import { requireAuth, extendSession} from "../middleware/session";
import { checkout, checkoutSuccess } from "../controllers/checkoutController";

const router = Router();

router.get("/", requireAuth, extendSession, getCartInfo);
router.post("/add", requireAuth, extendSession, addToCart);
router.put("/update", requireAuth, extendSession, updateCart);
router.delete("/delete", requireAuth, extendSession, removeFromCart);
router.get("/checkout",requireAuth, extendSession, checkout);
router.get("/checkout/checkoutSuccess",requireAuth, extendSession, checkoutSuccess);

export default router;

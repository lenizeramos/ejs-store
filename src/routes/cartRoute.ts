import { Router } from "express";
import { getCartInfo, addToCart, removeFromCart, updateCart} from "../controllers/cartController";
import { requireAuth, extendSession} from "../middleware/session";

const router = Router();

router.get("/cart", requireAuth, extendSession, getCartInfo);
router.post("/cart/add", requireAuth, extendSession, addToCart);
router.put("/cart/update", requireAuth, extendSession, updateCart);
router.delete("/cart/delete", requireAuth, extendSession, removeFromCart);
//router.post("/cart/checkout", requireAuth, extendSession, checkoutCart);

export default router;

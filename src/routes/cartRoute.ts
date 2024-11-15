import { Router } from "express";
import { getCartInfo, addToCart, removeFromCart, updateCart} from "../controllers/cartController";
import { requireAuth, extendSession} from "../middleware/session";

const router = Router();

router.get("/", requireAuth, extendSession, getCartInfo);
router.post("/add", requireAuth, extendSession, addToCart);
router.put("/update", requireAuth, extendSession, updateCart);
router.delete("/delete", requireAuth, extendSession, removeFromCart);
//router.post("/checkout", requireAuth, extendSession, checkoutCart);

export default router;

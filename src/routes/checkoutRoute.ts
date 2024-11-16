import { Router } from "express";
import { checkout } from "../controllers/checkoutController";

const router = Router();

router.get("/cart/checkout",checkout);

export default router;
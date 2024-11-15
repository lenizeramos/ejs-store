import { Router } from "express";
import { checkout } from "../controllers/checkoutController";

const router = Router();

router.get("/checkout",checkout);

export default router;
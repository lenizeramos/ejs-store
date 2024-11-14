import { Router } from "express";
import { getIndex } from "../controllers/homeController";
import { requireAuth, extendSession } from "../middleware/session";

const router = Router();

router.get("/", requireAuth, extendSession, getIndex);

export default router;

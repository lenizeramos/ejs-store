import { Router } from "express";
import { getIndex } from "../controllers/homeController";
import { requireAuth } from "../middleware/requireAuth";
import { extendSession } from "../middleware/extendSession";

const router = Router();

router.get("/", requireAuth, extendSession, getIndex);

export default router;

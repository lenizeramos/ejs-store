import { Router } from "express";
import { getIndex } from "../controllers/homeController";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.get("/", requireAuth, getIndex);

export default router;

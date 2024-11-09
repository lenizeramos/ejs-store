import { Router } from "express";
import { getLogin, getRegister } from "../controllers/authController";

const router = Router();

router.get("/login", getLogin);
router.get("/register", getRegister);

export default router;

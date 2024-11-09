import { Router } from "express";
import { getLogin, getRegister, loginUser, logoutUser, registerUser } from "../controllers/authController";

const router = Router();

router.get("/login", getLogin);
router.post('/login', loginUser);
router.get("/register", getRegister);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;

import { Router } from "express";
import {
  getLogin,
  getRegister,
  loginUser,
  logoutUser,
  registerUser
} from "../controllers/authController";
import { verifySession } from "../middleware/session";

const router = Router();

router.get("/login", verifySession, getLogin);
router.post("/login", loginUser);
router.get("/register", verifySession, getRegister);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;

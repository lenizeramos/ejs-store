import { Request, Response, RequestHandler, NextFunction } from "express";
import bcrypt from "bcrypt";
import { setAuthUser, getAuthUserByEmail } from "../models/authUserModel";
import { createEmptyCart } from "../models/cartModel";

export const getLogin: RequestHandler = (req: Request, res: Response) => {
  res.render("pages/auth/login", { error: null });
};

export const getRegister: RequestHandler = (req: Request, res: Response) => {
  res.render("pages/auth/register", { error: null });
};

declare module "express-session" {
  interface SessionData {
    user: { name: string; email: string };
  }
}

export const registerUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    setAuthUser({ name, email, password: hashedPassword });
    createEmptyCart(email);
    req.session.user = { name, email };

    res.redirect("/");
  } catch (error) {
    res.render("pages/auth/register", {
      error: (error as Error).message
    });
  }
};

export const loginUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (req.session.user) {
    res.redirect("/");
  }

  const user = getAuthUserByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = { name: user.name, email: user.email };
    res.redirect("/");
  } else {
    res.render("pages/auth/login", { error: "Invalid email or password!" });
  }
};

export const logoutUser: RequestHandler = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/auth/login");
  });
};

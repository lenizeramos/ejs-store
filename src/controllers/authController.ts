import { Request, Response, RequestHandler, NextFunction } from "express";
import bcrypt from "bcrypt";
import { setAuthUser, getAuthUsers } from "../models/authUserModel";

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

  const hashedPassword = await bcrypt.hash(password, 10);
  setAuthUser({ name, email, password: hashedPassword });
  req.session.user = { name, email };

  res.redirect("/");
};

export const loginUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (req.session.user) {
    console.log("User already logged in", req.session.user.name);
    res.redirect("/");
  }

  const users = getAuthUsers();

  const user = users.find((u) => u.email === email);

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = { name: user.name, email: user.email };
    res.redirect("/");
  } else {
    res.render("pages/auth/login", { error: "Invalid email or password!" });
  }
};

export const logoutUser: RequestHandler = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    res.redirect("/auth/login");
  });
};

import { Request, Response, NextFunction } from "express";
import { SESSION_MAX_AGE } from "./constants";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

export const extendSession = (req: Request, res: Response, next: NextFunction) => {
  req.session.cookie.maxAge = SESSION_MAX_AGE;
  next();
};

export const verifySession = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    next();
  }
};

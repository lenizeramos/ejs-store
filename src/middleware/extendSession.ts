import { Request, Response, NextFunction } from "express";

export const extendSession = (req: Request, res: Response, next: NextFunction) => {
  req.session.cookie.maxAge = 1000 * 1 * 1 * 1 * 60;
  next();
};

export const verifySession = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    next();
  }
};

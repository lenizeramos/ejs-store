import { Request, Response, NextFunction } from "express";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  //console.log(`requireAuth ${req.session.user?.name}`);  
  if (req.session.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

import { Request, Response, NextFunction } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let logged = true
    if (logged) {
        
    
 // if (req.session.user) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

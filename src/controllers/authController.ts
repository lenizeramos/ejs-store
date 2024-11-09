import { Request, Response, RequestHandler, NextFunction } from "express";

export const getLogin: RequestHandler = (req: Request, res: Response) => {
  
  res.render("pages/auth/login");
};

export const getRegister: RequestHandler = (req: Request, res: Response) => {
  res.render("pages/auth/register");
};


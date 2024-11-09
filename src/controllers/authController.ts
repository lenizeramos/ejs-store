import { Request, Response } from "express";

export const getLogin = (req: Request, res: Response) => {
  res.render("pages/auth/login");
};

export const getRegister = (req: Request, res: Response) => {
  res.render("pages/auth/register");
};

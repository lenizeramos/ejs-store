import { Request, Response } from "express";
import { getCart } from "../models/cartModel";

export const getCartInfo = (req: Request, res: Response) => {
  const cart = getCart(req.session.user?.email || "");
  res.render("pages/cart", {user: req.session.user, cart: cart});
};

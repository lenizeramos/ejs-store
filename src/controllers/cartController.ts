import { Request, Response } from "express";
import { getCart } from "../models/cartModel";

export const getCartInfo = (req: Request, res: Response) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }

  const data = {
    user: {
      name: req.session.user?.name
    }
  };
  const cart = getCart(req.session.user.email);
  console.log("Cart", cart);
  res.render("pages/cart", {user:data.user, cart: cart });
};

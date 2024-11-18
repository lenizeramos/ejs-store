import { Request, RequestHandler, Response } from "express";
import { cartList, getCart } from "../models/cartModel";
import { checkItems } from "../models/checkoutModel";

export const checkout = (req: Request, res: Response) => {
  const checkout = checkItems(req.session.user?.email || "")
  let totalAll:number = 0;

  checkout.forEach(item => {
    totalAll += item.totalEach;    
  });
  res.render("pages/checkout", {user: req.session.user, checkout: checkout, total:totalAll});
};

export const checkoutSuccess = (req: Request, res: Response) => {
  const checkout = checkItems(req.session.user?.email || "")
  let totalAll:number = 0;

  checkout.forEach(item => {
    totalAll += item.totalEach;    
  });

  cartList.find((cart) => cart.userEmail === req.session.user!.email)!.products.length = 0

  res.render("pages/checkoutSuccess", {user: req.session.user, checkout: checkout, total:totalAll});
};

import { Request, RequestHandler, Response } from "express";
import { getCart } from "../models/cartModel";
import { checkItems } from "../models/checkoutModel";

export const checkout = (req: Request, res: Response) => {
  const checkout = checkItems(req.session.user?.email || "")
  let totalAll:number = 0;

  checkout.forEach(item => {
    totalAll += item.totalEach;    
  });

  console.log("Alldata",checkout,totalAll)
  res.render("pages/checkout", {user: req.session.user, checkout: checkout, total:totalAll});
};

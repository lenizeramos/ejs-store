import { Response, Request } from "express";
import { getProducts } from "../models/productModel";

export const getIndex = async (req: Request, res: Response) => {
  const products = await getProducts();
  const lessProducts = [];

  // to do: get 5 random products
  for (let i = 0; i <= 3; i++) {
    lessProducts.push(products[i]);
  }

  res.render("pages/index", { user: req.session.user, products: lessProducts });
};

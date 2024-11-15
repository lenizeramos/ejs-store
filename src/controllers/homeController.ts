import { Response, Request } from "express";
import { getProducts } from "../models/productModel";

export const getIndex = async (req: Request, res: Response) => {
  const products = await getProducts();

  const shuffledProducts = products.sort(() => Math.random() - 0.5);
  const lessProducts = shuffledProducts.slice(0, 6);

  res.render("pages/index", { user: req.session.user, products: lessProducts });
};

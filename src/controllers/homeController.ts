import { Response, Request } from "express";
import { getProducts } from "../models/productModel";

export const getIndex = async (req: Request, res: Response) => {
  const data = {
    user: {
      name: req.session.user?.name
    }
  };

  const products = await getProducts();
  res.render("pages/index", {user: data.user, products: products});
};


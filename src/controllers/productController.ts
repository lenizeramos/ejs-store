import { Request, Response } from "express";
import { getProducts } from "../models/productModel";

export const getProductsList = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    const data = {
      user: {
        name: req.session.user?.name
      }
    };
    res.render("pages/products", { products: products, user: data.user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching product data");
  }
};
  
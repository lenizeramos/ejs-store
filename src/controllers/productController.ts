import { Request, Response } from "express";
import { getProducts } from "../models/productModel";

export const getProductsList = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.render("pages/products", { products: products, user: req.session.user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching product data");
  }
};

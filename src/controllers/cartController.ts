import { Request, Response } from "express";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
  updateProductQuantity
} from "../models/cartModel";
import { getProductById, Product } from "../models/productModel";

export const getCartInfo = (req: Request, res: Response) => {
  const cart = getCart(req.session.user?.email || "");
  res.render("pages/cart", { user: req.session.user, cart: cart });
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).send("Parameter 'productId' is required.");
    }
    const product = await getProductById(productId);

    if (!product) {
      return res.status(400).send("Product not found.");
    }

    addProductToCart(req.session.user?.email || "", product as Product);

    res.status(200).send("Product added to cart successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send(error instanceof Error ? error.message : "Internal Server Error");
  }
};

export const updateCart = (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    if (quantity <= 0) {
      return res.status(400).send("Quantity must be greater than 0.");
    }
    if (!productId || !quantity) {
      return res.status(400).send("Parameters 'productId' and 'quantity' are required.");
    }
    if (isNaN(quantity)) {
      return res.status(400).send("Quantity must be a number.");
    }
    updateProductQuantity(req.session.user?.email || "", productId, quantity);
    res.status(200).send("Product updated in cart successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send(error instanceof Error ? error.message : "Internal Server Error");
  }
};

export const removeFromCart = (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).send("Parameter 'productId' is required.");
    }
    removeProductFromCart(req.session.user?.email || "", productId);
    res.status(200).send("Product removed from cart successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send(error instanceof Error ? error.message : "Internal Server Error");
  }
};

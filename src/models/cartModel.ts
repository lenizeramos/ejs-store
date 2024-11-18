import { Product } from "./productModel";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  userEmail: string;
  products: CartItem[];
}

export let cartList: Cart[] = [];

export const createEmptyCart = (userEmail: string) => {
  if (cartList.find((cart) => cart.userEmail === userEmail)) {
    console.log("Cart already exists for this user.");
    return;
  }
  cartList.push({ userEmail, products: [] });
};

export const getCart = (userEmail: string) => {
  return cartList.find((cart) => cart.userEmail === userEmail);
};

export const addProductToCart = (userEmail: string, product: Product) => {
  if (isProductInCart(userEmail, product.id)) {
    incrementProductQuantity(userEmail, product.id);
    return;
  }
  const cart = getCart(userEmail);
  cart?.products.push({ product, quantity: 1 });
};

export const updateProductQuantity = (userEmail: string, productId: number, quantity: number) => {
  const cart = getCart(userEmail);
  const product = cart?.products.find((item) => item.product.id === productId);
  if (!product) {
    throw new Error("Product not found in cart");
  }
  product.quantity = quantity;
};

export const incrementProductQuantity = (userEmail: string, productId: number) => {
  const cart = getCart(userEmail);
  const product = cart?.products.find((item) => item.product.id === productId);
  if (product) {
    product.quantity++;
  }
};

export const isProductInCart = (userEmail: string, productId: number) => {
  const cart = getCart(userEmail);
  return cart?.products.some((item) => item.product.id === productId);
};

export const removeProductFromCart = (userEmail: string, productId: number) => {
  const cart = getCart(userEmail);
  if (cart) {
    cart.products = cart.products.filter((item) => item.product.id !== productId);
  }
};

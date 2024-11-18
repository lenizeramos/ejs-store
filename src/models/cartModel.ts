import { Product } from "./productModel";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  userEmail: string;
  products: CartItem[];
}

export let cartList: Cart[] = [
 /*  {
    userEmail: "admin@admin.com",
    products: [
      {
        product: {
          id: 7,
          title: "White Gold Plated Princess",
          price: 9.99,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 3,
            count: 400
          }
        },
        quantity: 1
      }
    ]
  } */
];

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

import { Product } from "./productModel";
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  userEmail: string;
  products: CartItem[];
}

let cartList: Cart[] = [
  {
    userEmail: "admin@admin.com", // will come from session
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
  }
];

export const createEmptyCart = (userEmail: string) => {
  if (cartList.find((cart) => cart.userEmail === userEmail)) {
    console.log("Cart already exists");
    return;
  }
  cartList.push({ userEmail, products: [] });
};

export const getCart = (userEmail: string) => {
  return cartList.find((cart) => cart.userEmail === userEmail);
};

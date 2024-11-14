import { Product } from "./productModel";
/* 
export interface Cart {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  totalPrice: number;
  count: number;
}

let cartItems: Cart[] = [];

export const setCartItems = (item: Product) => {
  let totalPrice = item.price;
  const cartExists = cartItems.find(u => u.id === item.id);
  if(cartExists){
    cartExists.count++;
    cartExists.totalPrice = cartExists.price * cartExists.count;
  } else {
    //clicked item is new item
    cartItems.push({...item, totalPrice:totalPrice, count:1 })
  }
}

export const getCartItems = (item: Product) => {
  return cartItems;
}


 *////////////////////////////
interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
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
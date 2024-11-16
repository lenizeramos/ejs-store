import { CartItem, getCart } from "./cartModel";
import { Product } from "./productModel";

interface Checkout {
  products: Product;
  quantity: number;
  totalEach: number;
}

let checkoutItemList:Checkout[] = [];

export const checkItems = (userEmail: string)=>{
  const cartitem = getCart(userEmail)
  if(cartitem){
    checkoutItemList.length = 0;
    cartitem.products.forEach(item => {
      const totalEach = item.product.price * item.quantity;
      checkoutItemList.push({products:item.product,quantity:item.quantity,totalEach:totalEach})
    });
  }
  return checkoutItemList
}


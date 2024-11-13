import { Response, Request } from "express";
import { getProducts } from "../models/productModel";


export const getIndex = async (req: Request, res: Response) => {
  const data = {
    user: {
      name: req.session.user?.name
    }
  };

  const products = await getProducts(); //20 items
  const lessProducts = [];

  for(let i = 0; i <= 5; i++){
    lessProducts.push(products[i])
  }

  
  res.render("pages/index", {user: data.user, products: lessProducts});
};


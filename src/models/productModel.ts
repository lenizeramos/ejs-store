import { fetchProducts } from "../utilities/fetchProducts";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

let products: Product[] = [];

export const getProducts = async () => {
  if (products.length === 0) {
    products = (await fetchProducts()) as Product[];
  }

  return products;
};

export const getProductById = async (id: number) => {
  return (await getProducts()).find((p: Product) => p.id === id);
};

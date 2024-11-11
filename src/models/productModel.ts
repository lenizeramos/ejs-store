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
    const response = await fetch("https://fakestoreapi.com/products");
    products = (await response.json()) as Product[];
  }
  console.log(products);

  return products;
};

/* export const getProductById = (id: number) => {
  return products.find((p) => p.id === id);
};
 */